const express = require("express");
const router = express.Router();
const { signup, login, myProfile } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/", myProfile);

module.exports = router;
