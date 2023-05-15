const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const asyncHandler = require("express-async-handler");
const preventToken = asyncHandler(async (req, res, next) => {
  // console.log("test prevent");
  const token = req.headers.token;
  if (token === null) {
    next();
  } else {
    jwt.verify(token, process.env.TOKENs, (err, decoded) => {
      if (err) {
        res.statusCode =404;
      } else {
        res.statusCode =405;
        // console.log("crct");
        res.send()
      }
    });
  }
});
module.exports = { preventToken };
