// /controllers/collegeController.js

const axios = require('axios');

// Define the base URL of the Python server
const PYTHON_SERVER_URL = 'http://127.0.0.1:8000';

const fetchCollegeData = async (collegeType, locationType, locationValue) => {
  try {
    // Send a GET request to the Python server
    const response = await axios.get(`${PYTHON_SERVER_URL}/${collegeType}/${locationType}=${locationValue}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Python server.');
  }
};

// Controller functions for different college types
const getEngineeringColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

  try {
    const data = await fetchCollegeData('engineering_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Similar functions for other types of colleges
const getMedicalColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

  try {
    const data = await fetchCollegeData('medical_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getManagementColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

    try {
    const data = await fetchCollegeData('management_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPharmacyColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;  

    try {
    const data = await fetchCollegeData('pharmacy_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDentalColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

    try {
    const data = await fetchCollegeData('dental_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArchitectureColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

    try {
    const data = await fetchCollegeData('architecture_colleges', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

const getResearchColleges = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

    try {
    const data = await fetchCollegeData('research_colleges', locationType, locationValue);
    res.json(data);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const getUniversities = async (req, res) => {
  const { state, city } = req.body;
  const locationType = state ? 'state' : 'city';
  const locationValue = state || city;

    try {
    const data = await fetchCollegeData('universities', locationType, locationValue);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//commerece, arts etc
const getColleges = async (req, res) => {
  const { state } = req.body;
  if (!state) {
    return res.status(400).json({ message: 'State is required.' });
  }
    try {
    const data = await fetchCollegeData('colleges', 'state', state);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEngineeringColleges,
  getMedicalColleges,
  getManagementColleges,
  getPharmacyColleges,
  getDentalColleges,
  getArchitectureColleges,
  getResearchColleges,
  getUniversities,
  getColleges
};
