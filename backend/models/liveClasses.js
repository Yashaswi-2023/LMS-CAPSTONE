const mongoose = require("mongoose");
const liveClass = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  instructor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  duration: {
    type: String,
  }
}
module.exports = mongoose.model("LiveClasses", liveClass);