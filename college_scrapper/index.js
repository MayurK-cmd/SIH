const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Store colleges data in memory (this is for demo purposes, can be optimized)
let colleges = [];

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Parse the CSV file and load data
fs.createReadStream('colleges.csv')
  .pipe(csv())
  .on('data', (row) => {
    colleges.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// Utility function to filter colleges based on multiple criteria
function filterColleges({ state, city, type, nameContains }) {
  return colleges.filter(college => {
    const matchState = state ? college.state.toLowerCase() === state.toLowerCase() : true;
    const matchCity = city ? college.city.toLowerCase() === city.toLowerCase() : true;
    const matchType = type ? college.name.toLowerCase().includes(type.toLowerCase()) : true;
    const matchNameContains = nameContains ? college.name.toLowerCase().includes(nameContains.toLowerCase()) : true;

    return matchState && matchCity && matchType && matchNameContains;
  });
}

// General POST route to fetch colleges based on type, state, and city
app.post('/colleges', (req, res) => {
  const { type, state, city } = req.body;

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }

  // Fetch the filtered colleges
  const filteredColleges = filterColleges({ type, state, city });
  
  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: `No ${type} colleges found for the specified parameters.` });
  }

  res.json(filteredColleges);
});

// New POST route for government colleges with type and government name filter
app.post('/government-colleges', (req, res) => {
  const { type, state, city } = req.body;

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }

  // Fetch the filtered government colleges (with type and "government" in the name)
  const filteredColleges = filterColleges({ state, city, type, nameContains: 'government' });

  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: 'No government colleges found for the specified parameters.' });
  }

  res.json(filteredColleges);
});

// New POST route to search colleges by name (normal)
app.post('/search-colleges', (req, res) => {
  const { type, state, city } = req.body;

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }

  // Fetch the filtered colleges (by name, type, and state, city is optional)
  const filteredColleges = filterColleges({ state, city, type, nameContains: '' });

  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: `No colleges found for the specified parameters.` });
  }

  res.json(filteredColleges);
});

// New POST route to search government colleges by name
app.post('/search-government-colleges', (req, res) => {
  const { type, state, city } = req.body;

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }

  // Fetch the filtered government colleges (by name, type, and state, city is optional)
  const filteredColleges = filterColleges({ state, city, type, nameContains: 'government' });

  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: 'No government colleges found for the specified parameters.' });
  }

  res.json(filteredColleges);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
