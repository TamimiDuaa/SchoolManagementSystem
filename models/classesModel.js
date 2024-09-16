const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    subject: {
        name: String,
        days:[],
        start_time:String,
        end_time:String
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'  // Reference to the Teacher model
    },
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'  // Reference to the Student model
    }]
  });

  const classes = mongoose.model('Class', classSchema);

  module.exports = classes;