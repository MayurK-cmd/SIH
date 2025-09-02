const express = require('express');
const router = express.Router();
const { getExamsAfter10th, getExamsAfter12th } = require('../controllers/examsController');
const auth = require('../middleware/authMiddleware');

router.get('/after-10th', auth, getExamsAfter10th);
router.get('/after-12th', auth, getExamsAfter12th);

module.exports = router;