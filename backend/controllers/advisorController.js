const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Advisor = require("../models/Advisor");

// 🔹 Signup Advisor
exports.signupAdvisor = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, password, city, qualification } = req.body;

    // check if advisor exists
    const existingAdvisor = await Advisor.findOne({ email });
    if (existingAdvisor) {
      return res.status(400).json({ message: "Advisor already registered with this email" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdvisor = new Advisor({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      city,
      qualification
    });

    await newAdvisor.save();
    res.status(201).json({ message: "Advisor registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering advisor", error: error.message });
  }
};

// 🔹 Login Advisor
exports.loginAdvisor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const advisor = await Advisor.findOne({ email });
    if (!advisor) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, advisor.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate JWT
    const token = jwt.sign(
      { advisorId: advisor._id, email: advisor.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in advisor", error: error.message });
  }
};

// 🔹 Get Advisor Profile
exports.getAdvisorProfile = async (req, res) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const advisor = await Advisor.findById(decoded.advisorId).select("-password");
    if (!advisor) {
      return res.status(404).json({ message: "Advisor not found" });
    }

    res.status(200).json(advisor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching advisor profile", error: error.message });
  }
};
