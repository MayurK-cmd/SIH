const express = require("express");
const router = express.Router();
const { getAfter10th, getAfter12th } = require("../controllers/routeController");
const auth = require("../middleware/authMiddleware");

router.get("/after-10th", auth, getAfter10th);
router.get("/after-12th", auth, getAfter12th);

module.exports = router;
