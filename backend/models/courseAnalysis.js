const mongoose = require("mongoose");
const analysis = {
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  reviews: {
    type: Array,
  },
  ratings: {
    type: Array,
  }
}

module.exports = mongoose.model("reviewsRatings", analysis);