const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7000;

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

// Route to get colleges based on type and state or city from the URL
function createTypeRoutes(type) {
  // Normal routes
  app.get(`/${type}_colleges/state=:state`, (req, res) => {
    const { state } = req.params;
    const { city } = req.query; // Get city from query parameters
    
    const filteredColleges = filterColleges({ state, city, type, nameContains: '' });

    if (filteredColleges.length === 0) {
      return res.status(404).json({ message: `No ${type} colleges found in state: ${state}` });
    }

    res.json(filteredColleges);
  });

  app.get(`/${type}_colleges/city=:city`, (req, res) => {
    const { city } = req.params;
    const { state } = req.query; // Get state from query parameters
    
    const filteredColleges = filterColleges({ state, city, type, nameContains: '' });

    if (filteredColleges.length === 0) {
      return res.status(404).json({ message: `No ${type} colleges found in city: ${city}` });
    }

    res.json(filteredColleges);
  });

  // Government routes
  app.get(`/government_${type}_colleges/state=:state`, (req, res) => {
    const { state } = req.params;
    const { city } = req.query; // Get city from query parameters
    
    const filteredColleges = filterColleges({ state, city, type, nameContains: 'government' });

    if (filteredColleges.length === 0) {
      return res.status(404).json({ message: `No government ${type} colleges found in state: ${state}` });
    }

    res.json(filteredColleges);
  });

  app.get(`/government_${type}_colleges/city=:city`, (req, res) => {
    const { city } = req.params;
    const { state } = req.query; // Get state from query parameters
    
    const filteredColleges = filterColleges({ state, city, type, nameContains: 'government' });

    if (filteredColleges.length === 0) {
      return res.status(404).json({ message: `No government ${type} colleges found in city: ${city}` });
    }

    res.json(filteredColleges);
  });
}

// New POST route to search colleges by name (normal)
app.post('/search-colleges', (req, res) => {
  const { type, name, state, city } = req.body; // Include state and city as optional

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }
  if (!name) {
    return res.status(400).json({ message: 'College name is required' });
  }

  // Fetch the filtered colleges (by name, type, and optionally state/city)
  const filteredColleges = filterColleges({
    type,
    nameContains: name,
    state,
    city
  });

  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: `No colleges found matching the parameters` });
  }

  res.json(filteredColleges);
});

// New POST route to search government colleges by name
app.post('/search-government-colleges', (req, res) => {
  const { type, name, state, city } = req.body; // Include state and city as optional

  if (!type) {
    return res.status(400).json({ message: 'College type is required' });
  }
  if (!name) {
    return res.status(400).json({ message: 'College name is required' });
  }

  // Fetch the filtered government colleges (by name, type, state/city, and government in the name)
  const filteredColleges = filterColleges({
    type,
    nameContains: name,
    state,
    city,
    nameContains: 'government' // Ensure "government" is in the name
  });

  if (filteredColleges.length === 0) {
    return res.status(404).json({ message: `No government colleges found matching the parameters` });
  }

  res.json(filteredColleges);
});



// Create routes for each type of college
const collegeTypes = [
  'engineering', 'medical', 'management', 'pharmacy', 'dental', 'architecture', 
  'research', 'universities', 'commerce', 'arts', 'law', 'agriculture'
];

// Loop through all the types and create the necessary routes
collegeTypes.forEach(type => createTypeRoutes(type));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
