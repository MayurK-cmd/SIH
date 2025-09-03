const express = require("express");
const { signupAdvisor, loginAdvisor, getAdvisorProfile } = require("../controllers/advisorController");
const router = express.Router();

// POST /api/advisors/signup
router.post("/signup", signupAdvisor);

// POST /api/advisors/login
router.post("/login", loginAdvisor);
router.get("/profile", getAdvisorProfile);

module.exports = router;
