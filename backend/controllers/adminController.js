const teacherProfile = require("../models/instructorProfile");
const adminProfile = require("../models/adminProfile");
const adminAssessments = require("../models/adminAssessments");
const userProfile = require("../models/userProfile");
const instructorProfile = require("../models/instructorProfile");
const course = require("../models/courses");
var bcrypt = require("bcryptjs");
const { uploadFile } = require("../middlewares/s3");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
const addTeacher = async (req, res) => {
  try {
    await teacherProfile.findOne({ email: req.body.email }).then((data) => {
      if (data == null) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("learnplus@123", salt);
        const teacher = new teacherProfile({
          firstname: req.body.firstname,

          lastname: req.body.lastname,

          email: req.body.email,

          password: hash,
        });

        teacher.save();

        res.send(req.body);
      }
      else {
        res.statusCode = 401;
        res.send();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (req, res) => {
  try {
    console.log("yashaakjslkadh", req.body);
    console.log("tzfdaxhgsadijklfg", req.headers);
    const data = await adminProfile.findOne({ email: req.headers.email });
    console.log("sahithisodpfg'hjk", data);
    var hash = bcrypt.hashSync(req.body.newpassword, 10);
    console.log(hash,43);
    if (bcrypt.compareSync(req.body.currentpassword, data.password)) {
      if (req.body.reenterpassword == req.body.newpassword) {
        var k = await adminProfile.findOneAndUpdate(
          { email: req.headers.email },
          { password: hash }
        );
        console.log(k, 49);
        res.send();
      } else {
        console.log(52);
        res.statusCode = 400;
        res.send();
      }
    } else {
      console.log(54);
      res.statusCode = 401;
      res.send();
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  // console.log(req.body);
  try {
    var data = await adminProfile.findOne({ email: req.body.email });
    console.log(data, 707);
    // console.log(707);
    if (data == null) {
      res.statusCode = 404;
      res.send();
    } else if (bcrypt.compareSync(req.body.password, data.password)) {
      const accessToken = jwt.sign(
        {
          user: {
            username: req.body.email,

            password: req.body.password,
          },
        },

        process.env.TOKENa,

        { expiresIn: "50m" }
      );

      // console.log(req.body);
      res.statusCode = 200;
      res.send([accessToken, data]);
    } else {
      res.statusCode = 401;
      res.send();
    }
  } catch (error) {
    console.log("Please check your code");
  }
};

const getAdminDetails = async (req, res) => {
  try {
    await adminProfile.findOne({ email: req.headers.email }).then((data) => {
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

const editAdminProfile = async (req, res) => {
  try {
    console.log("Data", req.body);
    console.log("Files", req.file);
    var uploadpicture;
    if (req.file) {
      var file = req.file;
      uploadpicture = generateFileName();
      const tem = await uploadFile(file.buffer, uploadpicture, file.mimetype);
      uploadpicture =
        "https://learnx.s3.us-east-2.amazonaws.com/" + uploadpicture;
    }
    console.log(uploadpicture);
    await adminProfile.findOneAndUpdate(
      { email: req.headers.email },
      {
        $set: {
          firstname: req.body.firstName,

          lastname: req.body.lastName,

          profilePicture: uploadpicture,

          occupation: req.body.occupation,

          companyName: req.body.companyName,

          phoneNumber: req.body.phoneNumber,

          address: req.body.address,

          city: req.body.city,

          state: req.body.state,

          pincode: req.body.pincode,

          website: req.body.website,
        },
      }
    );
    res.send();
  } catch (error) {
    console.log(error);
  }
};
const addAssessment = async (req, res) => {
  console.log(req.body);
  var questions = [];
  for (let i = 0; i < req.body.statement.length; i++) {
    questions.push({
      statement: req.body.statement[i],
      inputFormat: req.body.inputFormat[i],
      outputFormat: req.body.outputFormat[i],
      constraints: req.body.constraints[i],
      sampleInput: req.body.sampleInput[i],
      sampleOutput: req.body.sampleOutput[i],
      hiddenTestInput: req.body.hiddenTestInput[i],
      hiddenTestOutput: req.body.hiddenTestOutput[i],
      explanation: req.body.explanation[i],
    });
  }
  const prbl = new adminAssessments({
    title: req.body.title,
    questions: questions,
  });
  prbl.save().then(() => {
    console.log("saved problems");
  });
};

const getProblems = async (req, res) => {
  var ques = await adminAssessments.find({});
  res.send(ques);
};


const getTeachers = async (req, res) => {
var data = await instructorProfile.find({});
res.send(data);
};
const getStudents = async (req, res) => {
var data = await userProfile.find({});
res.send(data);
};
const getCourses = async (req, res) => {
var data = await course.find({});
res.send(data);
};
const getTestWriters = async(req,res)=>{
var writers = [];
var data = await adminAssessments.find({});
// res.send(data);
for(i in data){
  writers.push(data[i].invitees)
}
const simplifyArray = (arr = []) => {
  const res = [];
  arr.forEach(element => {
     element.forEach(el => {
        res.push(el);
     });
  });
  return res;
};
//  console.log(writers);
res.send(simplifyArray(writers));
}
const getImagesVerify = async(req,res)=>{
try{

  var data = (await userProfile.find({email : req.headers.email}))[0].adminTestImages[0].images;
  // console.log(data);
  res.send(data)
}
catch(err){
  console.log(err);
}
}
const addOrRemove = async(req,res)=>{
// await findByIdAndUpdate()
// console.log(req.headers);
if(req.headers.decision == 'accept'){
  res.send("success");
}
else{
  await userProfile.findOneAndUpdate({email : req.headers.email},{
    $set : {
      adminTestMarks : 0,
      adminTestImages : [],
    }
  }).then(()=>{
    res.send("success")
  })
}
}


module.exports = {
  addTeacher,
  login,
  getAdminDetails,
  editAdminProfile,
  addAssessment,
  changePassword,
  getProblems,
  getTeachers,
  getStudents,
  getCourses,
  getTestWriters,
  getImagesVerify,
  addOrRemove,
};
