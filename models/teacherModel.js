const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    hireDate: {
      type: Date,
      default: Date.now,
    },
  });


  const Teacher = mongoose.model('Teacher', teacherSchema);

  module.exports = Teacher;