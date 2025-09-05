// /routes/collegeRoutes.js

const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');
const verifyToken = require('../middleware/authMiddleware');

// Routes to get colleges based on state or city
router.post('/engineering_colleges', verifyToken, collegeController.getEngineeringColleges);
router.post('/medical_colleges', verifyToken, collegeController.getMedicalColleges);
router.post('/management_colleges', verifyToken, collegeController.getManagementColleges);
router.post('/pharmacy_colleges', verifyToken, collegeController.getPharmacyColleges);
router.post('/dental_colleges', verifyToken, collegeController.getDentalColleges);
router.post('/architecture_colleges', verifyToken, collegeController.getArchitectureColleges);
router.post('/research_colleges', verifyToken, collegeController.getResearchColleges);
router.post('/universities', verifyToken, collegeController.getUniversities);
router.post('/colleges', verifyToken, collegeController.getColleges);

module.exports = router;
