const mongoose = require("mongoose");
const course = {
  courseName: {
    type: String,
    unique: true,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseInstructor: {
    type: String,
    required: true,
  },
  courseCategory: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
  modules: {
    type: Array,
  },
  assesment: {
    type: Object,
  }
}
module.exports = mongoose.model("courses", course);