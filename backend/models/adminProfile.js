const mongoose = require("mongoose");
const user = {
  googleId: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 8,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  profilePicture: {
    type: String,
  },
  occupation: {
    type: String,
  },
  companyName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    length: 10,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
    length: 6, 
  },
  website: {
    type: String,
  }
}
module.exports = mongoose.model("adminProfile", user);