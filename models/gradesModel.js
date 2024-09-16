const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'  // Reference to the 'Student' model
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'  // Reference to the 'Class' model
  },
  scores: [
    {
      type: String,
      score: Number,
    }
  ],
  date:{
    type: Date,
    default: Date.now
  }
});

const grades = mongoose.model('grades', gradeSchema);

module.exports = grades;