// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const { stateWiseColleges, cityWiseColleges, stateWiseGovernmentColleges, cityWiseGovernmentColleges, searchColleges, searchGovernmentColleges  } = require('../controllers/collegeController');
const verifyToken = require('../middleware/authMiddleware');

// POST request route to forward the request
router.post('/college-state', verifyToken, stateWiseColleges);
router.post('/college-city', verifyToken, cityWiseColleges);
router.post('/government-college-state', verifyToken, stateWiseGovernmentColleges);
router.post('/government-college-city', verifyToken, cityWiseGovernmentColleges);
router.post('/search-college', verifyToken, searchColleges);
router.post('/search-government-college', verifyToken, searchGovernmentColleges);

module.exports = router;
