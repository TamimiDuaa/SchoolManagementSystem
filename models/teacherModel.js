const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone:String,
    classes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'  // Reference to the Class model
      }
  });


  const Teacher = mongoose.model('Teacher', teacherSchema);

  module.exports = Teacher;