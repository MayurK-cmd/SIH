// controllers/apiController.js
const axios = require('axios');
const apiUrl = 'https://college-data-glhv.onrender.com'

const stateWiseColleges = async (req, res) => {
    try {
        const {type, state} = req.body;
        const URI = `${apiUrl}/${type}_colleges/state=${state}`;
        const response = await axios.get(URI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching state-wise colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const cityWiseColleges = async (req, res) => {
    try {
        const {type, city} = req.body;  
        const URI = `${apiUrl}/${type}_colleges/city=${city}`;
        const response = await axios.get(URI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching city-wise colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const stateWiseGovernmentColleges = async (req, res) => {
    try {
        const {type, state} = req.body;
        const URI = `${apiUrl}/government_${type}_colleges/state=${state}`;
        const response = await axios.get(URI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching state-wise government colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const cityWiseGovernmentColleges = async (req, res) => {
    try {
        const {type, city} = req.body;  
        const URI = `${apiUrl}/government_${type}_colleges/city=${city}`;
        const response = await axios.get(URI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching city-wise government colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }   
};

const searchColleges = async (req, res) => {
    try {
        const { type, name, state, city } = req.body;
        if (!type || !name) {
            return res.status(400).json({ message: 'Type and name are required fields' });
        }
        const postData = {type, name};
        if (state) postData.state = state;
        if (city) postData.city = city;
        const URI = `${apiUrl}/search-colleges`;
        const response = await axios.post(URI, postData);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }  
};

const searchGovernmentColleges = async (req, res) => {
    try {
        const { type, name, state, city } = req.body;   
        if (!type || !name) {
            return res.status(400).json({ message: 'Type and name are required fields' });
        }
        const postData = {type, name};
        if (state) postData.state = state;
        if (city) postData.city = city;
        const URI = `${apiUrl}/search-government-colleges`;
        const response = await axios.post(URI, postData);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching government colleges:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { stateWiseColleges, cityWiseColleges, stateWiseGovernmentColleges, cityWiseGovernmentColleges, searchColleges, searchGovernmentColleges };
