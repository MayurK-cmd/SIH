const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, studyingin, gender, age, city, contactNumber } = req.body;

    let existingStudent = await Student.findOne({ email });
    if (existingStudent) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStudent = new Student({ firstName, lastName, email, password: hashedPassword, studyingin, gender, age, city, contactNumber });
    await newStudent.save();

    res.json({ msg: "Signup successful" });
  } catch (err) {
    res.status(500).send("Server error");
    console.error(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let existingStudent = await Student.findOne({ email });
    if (!existingStudent) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, existingStudent.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: existingStudent._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.myProfile = async (req, res) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // get the actual token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const studentProfile = await Student.findById(decoded.id).select("-password");
    if (!studentProfile) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(studentProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
