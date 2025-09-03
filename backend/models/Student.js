const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  studyingIn: { type: String },
  gender: { type: String, required: true, enum: ["male","female"] },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);


