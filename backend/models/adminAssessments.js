const { string } = require("i/lib/util");
const mongoose = require("mongoose");
const addAssessments = {
  title: {
    type: String,
    minlength: 1,
  },
  questions: {
    type: Array,
  },
  invitees : {
    type : Array,
  },
}
module.exports = mongoose.model("adminAssessments", addAssessments);