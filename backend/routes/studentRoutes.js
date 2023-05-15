const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "./testimages" });
const { uploadS3 } = require("../middlewares/uploads3");
router.use(cors());
const userCtrl = require("../controllers/studentController");
const { validateToken } = require("../middlewares/validateToken");
const { preventToken } = require("../middlewares/preventToken");
router.get("/getStudentDetails", userCtrl.getStudentDetails);

router.get("/student-messages", validateToken, userCtrl.usrdet);
router.get("/student-dashboard", validateToken, userCtrl.usrdet);
router.get("/student-subdetails", validateToken, userCtrl.userdet1);
router.get("/student-login", preventToken, userCtrl.usrdet);
router.get("/showBlogs", userCtrl.showBlogs);
router.get("/getTasks", userCtrl.getTasks);
router.get("/notestook", userCtrl.notestook);
router.get("/getValidity", userCtrl.getValidity);
router.get("/getUser", userCtrl.getUserById);
router.get("/getTser", userCtrl.getTserById);
// router.get("/getAll",userCtrl.getAll);
router.get("/getAllt", userCtrl.getAllt);
router.get("/getCourses1", userCtrl.getCourses);
router.get("/getCourses",userCtrl.getCourses)
router.get("/getCourseDetails", userCtrl.getCourseDetails);
router.get("/myCourses", validateToken, userCtrl.myCourses);
router.get("/getAssessment", userCtrl.getAssessment);
router.get("/getTestQuestions", userCtrl.getTestQuestions);
router.get("/addRatings",userCtrl.addRatings);
router.get("/getDetailsOfUser",userCtrl.getDetailsOfUser);
router.get("/leaderboard",userCtrl.leaderboard);
router.get("/getGithub",userCtrl.getGit);
// post
router.post("/editStudentProfile",uploadS3.single("avatar"), userCtrl.editStudentProfile);
router.post("/studentregister", userCtrl.register);
router.post("/savenotes", userCtrl.savenotes);
// router.post("/snapshot",userCtrl.snapshot)
router.post("/deleteNotes", userCtrl.deleteNotes);
router.post("/studentlogin", userCtrl.studentlogin);
router.post("/student-blog", uploadS3.single("blogimg"), userCtrl.addBlog);
router.post("/studentChangePassword", userCtrl.changePassword);
router.post("/addTask", userCtrl.addTask);
router.post("/doneTask", userCtrl.doneTask);
router.post("/validity", userCtrl.subscribe);
router.post("/buyCourse", userCtrl.buyCourse);
router.post("/validateAnswers", userCtrl.addTestDetails);
router.post("/evaluateCode", userCtrl.evaluate);
router.post("/evaluateCode1", userCtrl.evaluate1);
router.post("/addScore", userCtrl.addScore);

module.exports = router;
