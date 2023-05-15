const mongoose = require("mongoose");
const quiz = {
  courseName: {
    type: String,
    unique: true,
    required: true,
  },
  courseInstructor: {
    type: String,
  },
  assessmentDescription: {
    type: String,
  },
  assessmentType: {
    type: String,
  },
  questions: {
    type: Array,
  }
}

module.exports = mongoose.model("finalAssessment", quiz);