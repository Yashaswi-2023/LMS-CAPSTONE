const express = require("express");
const router = express.Router();
const multer = require("multer");
const jwt = require("jsonwebtoken");
const instructor = require("../models/instructorProfile");
const { validateToken } = require("../middlewares/validateTokent");
const { preventToken } = require("../middlewares/preventTokent");
const path = require("path");
const student = require("./../models/userProfile")
const uploadCvideos = multer({ dest: "./uploads" });
const instructorController = require("../controllers/instructorController");
const { uploadS3 } = require("../middlewares/uploads3");
router.post("/instructorLogin", instructorController.login);
router.get("/getInstructorDetails", instructorController.getInstructorDetails);
router.post("/editInstructorProfile",uploadS3.single("avatar"), instructorController.editInstructorProfile);
router.post("/addCourse", uploadCvideos.array("video[]"), instructorController.addCourse);
router.get("/getCourses", instructorController.getCourses);
router.post("/addQuiz", instructorController.addQuiz);
router.post("/editCourse", uploadCvideos.array("video[]"), instructorController.editCourse);
router.get("/dashboard", validateToken);
router.get("/preventToken", preventToken);
router.post("/addLiveClass", instructorController.addLiveClasses);
router.get('/getTeacher', instructorController.getTeacher);
router.post("/ksk2", (req, res) => {
  student.findOne({ _id: req.body.id },{_id : 1,name : 1,email : 1,uploadpicture:1}).then((data) => {
    const accessToken = jwt.sign(
      {
        user: {
          username: data.email,
        },
      },
      process.env.TOKENs,
      { expiresIn: "50m" }
    );
    console.log("koushik",data);
    res.send([accessToken, data]);
  });
});
router.post("/ksk1", (req, res) => {
  console.log(req,40);
  instructor.findOne({ email: req.body.id },{name : 1,email : 1,uploadpicture:1}).then((data) => {
    console.log(data,41);
    const accessToken = jwt.sign(
      {
        user: {
          username: data.email,
        },
      },
      process.env.TOKENt,
      { expiresIn: "50m" }
    );
    console.log("koushik",data);
    res.send([accessToken, data]);
  });
});
router.get("/getAll",async(req,res)=>{
  var data = await student.find({});
  res.send(data)
})
router.post("/instructorChangePassword", instructorController.changePassword);
module.exports = router;