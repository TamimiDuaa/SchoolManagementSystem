const mongoose = require('mongoose');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;