const express = require("express");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/adminController");
const usersCollection = require("../models/userProfile")
const {uploadFile} = require("../middlewares/s3")
const { uploadS3 } = require("../middlewares/uploads3");
const { validateToken } = require("../middlewares/validateTokena");
const { preventToken } = require("../middlewares/preventTokena")
router.get("/getAllTeachers",adminController.getTeachers);
router.get("/getAllStudents",adminController.getStudents);
router.get("/adminJWTValidate", validateToken);
router.get("/adminJWTPrevent", preventToken);
router.get("/getAllCourses",adminController.getCourses);
router.get("/getProblems",adminController.getProblems);
router.post("/addTeacher",adminController.addTeacher);
router.post("/adminLogin", adminController.login);
router.post("/adminChangePassword", adminController.changePassword);
router.get("/getAdminDetails", adminController.getAdminDetails);
router.get("/getTestWriters",adminController.getTestWriters);
router.get("/getImagesVerify",adminController.getImagesVerify);
router.get('/autocomplete', async (req, res) => {
    const input= req.headers.input;
    console.log(input);
    const result = await usersCollection.find({
      $search: {
        autocomplete: {
          query: input,
          path: "email",
          tokenOrder: "sequential",
          fuzzy: {
            maxEdits: 2
          }
        }
      }
    }, { _id: 0, email: 1 } );
    console.log(result);
    res.send(result.map(user => user.email));
  });
router.post("/editAdminProfile",uploadS3.single("avatar"), adminController.editAdminProfile);
router.post("/addAssessment", adminController.addAssessment);
router.post("/addOrRemove",adminController.addOrRemove),
module.exports = router;