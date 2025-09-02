const express = require("express");
const { signupAdvisor, loginAdvisor } = require("../controllers/advisorController");
const router = express.Router();

// POST /api/advisors/signup
router.post("/signup", signupAdvisor);

// POST /api/advisors/login
router.post("/login", loginAdvisor);

module.exports = router;
