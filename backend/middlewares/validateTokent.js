const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const asyncHandler=require("express-async-handler")
const validateToken=asyncHandler(async(req,res,next)=>{
  const token=req.headers.token
  console.log(req.headers);
  if(token===null){
      res.status(404)
      // throw new Error("user is not logged in")
  }
  jwt.verify(token,process.env.TOKENt,(err,decoded)=>{
      if(err){
          res.status(401)
        // console.log("error",err);
        res.send()
      }
      else{
      req.user=decoded.user
      res.status(404)
      }
  })
})

module.exports = { validateToken }