const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'  // Reference to the Class model
  }],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;