const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const asyncHandler=require("express-async-handler")
const preventToken=asyncHandler(async(req,res,next)=>{
  const token=req.headers.token;
  if (token == null) {
    res.status(404);
  } else {
    jwt.verify(token, process.env.TOKENt, (err, decoded) => {
      if (err) {
        res.status(404);
      } else {
        res.status(401);
        throw new Error("crct");
      }
    });
  }
})
module.exports = { preventToken }