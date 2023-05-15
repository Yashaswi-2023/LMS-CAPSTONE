const instructorProfile = require("../models/instructorProfile");
const courses = require("../models/courses");
const finalassessment = require("../models/finalCourseAssessment");
const addLiveClass = require("../models/liveClasses");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const { uploadFile } = require("../middlewares/s3");
const crypto = require("crypto");
const path = require("path");
const { google } = require("googleapis");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
const fs = require("fs");
const login = async (req, res) => {
  console.log(req.body.pass);
  try {
    await instructorProfile.findOne({ email: req.body.email }).then((data) => {
      console.log(data);
      if (bcrypt.compareSync(req.body.password, data.password)) {
        const accessToken = jwt.sign(
          {
            user: {
              username: req.body.email,

              password: req.body.password,
            },
          },

          process.env.TOKENt,

          { expiresIn: "50m" }
        );

        // console.log(req.body);

        res.send([accessToken, data]);
      }
      else{
        res.statusCode = 405;
        res.send();
      }
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 404;
    res.send();
  }
};

const getInstructorDetails = async (req, res) => {
  try {
    console.log("yashhhhhhhhhhhhh", req.headers.email);
    await instructorProfile
      .findOne({ email: req.headers.email })
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  } catch (error) {
    console.log(error);
  }
};

const editInstructorProfile = async (req, res) => {
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
    await instructorProfile.findOneAndUpdate(
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


const KEYFILEPATH = path.join(__dirname, "credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
 
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const uploadddd = async (fileObject, id) => {
  const bufferStream = fs.createReadStream(fileObject.path);
  // bufferStream.end(fileObject.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: [id],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
};

const addCourse = async (req, res) => {
  console.log("course", req.body);
  console.log("course", req.files);
  var files = req.files;
  var upload_videos = [];
  var times = [];
  console.log(files);
  try {
  if(req.body.folderID != "") {
      for (let f = 0; f < files.length; f += 1) {
        await uploadddd(files[f], req.body.folderID);
      }
  }
} catch(error) {
  console.log("google folder id");
}
  for (i in files) {
    // getVideoDurationInSeconds(files[i].path).then((dur)=>{
    //   times.push(dur)
    // })
    var uploadvideo = generateFileName();

    var temp = fs.createReadStream(files[i].path);
    const tem = await uploadFile(
      temp,

      uploadvideo,

      files[i].mimetype
    );

    upload_videos[i] =
      "https://learnx.s3.us-east-2.amazonaws.com/" + uploadvideo;
  }
  console.log(times);
  var ques = req.body;
  var attr = Object.keys(ques);
  var quiz = [];
  for (let m = 1; m <= req.body.name.length; m++) {
    function isQues(ele) {
      if (ele.startsWith("module-" + m)) return true;
    }
    console.log(ques);
    var quesAns = attr.filter(isQues);
    console.log("firstsort", quesAns.sort());
    question = [];
    var temp = [];

    for (let i = 0; i < quesAns.length; i += 6) {
      question.push({
        questionText: ques[quesAns.sort()[i]],
        options: [
          ques[quesAns.sort()[i + 2]],
          ques[quesAns.sort()[i + 3]],
          ques[quesAns.sort()[i + 4]],
          ques[quesAns.sort()[i + 5]],
        ],
        correctAnswer: ques[quesAns.sort()[i + 1]],
      });
    }
          quiz.push(question);
  }
  console.log(quiz,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  console.log(upload_videos);
  var modules = [];
  for (let i = 0; i < req.body.name.length; i++) {
    var module = {
      name: req.body.name[i],
      video: upload_videos[i],
      quiz: quiz[i],
    };
    modules.push(module);
  }
  console.log(modules);
  try {
    //logs
    const course = new courses({
      courseName: req.body.title,

      courseDescription: req.body.description,

      courseCategory: req.body.category,

      courseType: req.body.course,

      courseInstructor: req.headers.email,

      modules: modules,
    });

    course.save();
  } catch (error) {
    console.log(error);
  }
};

const getCourses = async (req, res) => {
  try {
    courses.find({ courseInstructor: req.headers.email }).then((data) => {
      res.send(data);
    });
  } catch {
    console.log("Error Occured");
  }
};
const changePassword = async (req, res) => {
  try {
    console.log("yashaakjslkadh", req.body);
    console.log("tzfdaxhgsadijklfg", req.headers);
    const data = await instructorProfile.findOne({ email: req.headers.email });
    console.log("sahithisodpfg'hjk", data);
    var hash = bcrypt.hashSync(req.body.newpassword, 10);
    console.log(hash,43);
    if (bcrypt.compareSync(req.body.currentpassword, data.password)) {
      if (req.body.reenterpassword == req.body.newpassword) {
        var k = await instructorProfile.findOneAndUpdate(
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

const getTeacher = async (req, res) => {
  try {
    instructorProfile.findOne({ email: req.headers.email }).then((data) => {
      res.send(data);
    })
  } catch {
    console.log("Error Occured");
  }
}

const addQuiz = async (req, res) => {
  console.log(req.body);
  if (req.body.type === "Quiz") {
    var ques = req.body;
    var attr = Object.keys(ques);
    var quiz = [];
    function isQues(ele) {
      if (ele.startsWith("question-")) return true;
    }
    console.log(ques);
    var quesAns = attr.filter(isQues);
    console.log("firstsort", quesAns.sort());
    question = [];

    for (let i = 0; i < quesAns.length; i += 6) {
      question.push({
        questionText: ques[quesAns.sort()[i]],
        options: [
          ques[quesAns.sort()[i + 2]],
          ques[quesAns.sort()[i + 3]],
          ques[quesAns.sort()[i + 4]],
          ques[quesAns.sort()[i + 5]],
        ],
        correctAnswer: ques[quesAns.sort()[i + 1]],
      });
      quiz.push(question);
    }
    console.log(question);
    
  } else {
    var question = [];
    for (i in req.body.statement) {
      var object = {
        question: req.body.statement[i],
        inputFormat: req.body.inputFormat[i],
        outputFormat: req.body.outputFormat[i],
        constraints: req.body.constraints[i],
        sampleInput: req.body.sampleInput[i],
        sampleOutput: req.body.sampleOutput[i],
        hiddenTestInput: req.body.hiddenTestInput[i],
        hiddenTestOutput: req.body.hiddenTestOutput[i],
        explanation: req.body.explanation[i],
      };
      question.push(object);
    }
  }
  try {
    //logs
    const assessment = new finalassessment({
      courseName: req.body.courses,

      assessmentDescription: req.body.description,

      assessmentType: req.body.type,

      courseInstructor: req.body.email,

      questions: question,
    });

    assessment.save();
  } 
  catch (error) {
    console.log(error);
  }
  var assessmentsId = await finalassessment.findOne({courseName:req.body.courses});
  await courses.findOneAndUpdate({courseName: req.body.courses}, {$set: {
    assessment: assessmentsId,
  }

  });
};

const editCourse = async (req, res) => {
  console.log("course", req.body);
  console.log("course", req.files);
  var files = req.files;
  var upload_videos = [];
  var times = [];
  console.log(files);
  for (i in files) {
    // getVideoDurationInSeconds(files[i].path).then((dur)=>{
    //   times.push(dur)
    // })
    var uploadvideo = generateFileName();

    var temp = fs.createReadStream(files[i].path);
    const tem = await uploadFile(
      temp,

      uploadvideo,

      files[i].mimetype
    );

    upload_videos[i] =
      "https://learnx.s3.us-east-2.amazonaws.com/" + uploadvideo;
  }
  console.log(times);
  var ques = req.body;
  var attr = Object.keys(ques);
  var quiz = [];
  for (let m = 1; m <= req.body.name.length; m++) {
    function isQues(ele) {
      if (ele.startsWith("module-" + m)) return true;
    }
    console.log(ques);
    var quesAns = attr.filter(isQues);
    console.log("firstsort", quesAns.sort());
    question = [];
    var temp = [];

    for (let i = 0; i < quesAns.length; i += 6) {
      question.push({
        questionText: ques[quesAns.sort()[i]],
        options: [
          ques[quesAns.sort()[i + 2]],
          ques[quesAns.sort()[i + 3]],
          ques[quesAns.sort()[i + 4]],
          ques[quesAns.sort()[i + 5]],
        ],
        correctAnswer: ques[quesAns.sort()[i + 1]],
      });
      quiz.push(question);
    }
  }
  console.log(quiz);
  console.log(upload_videos);
  var modules = [];
  for (let i = 0; i < req.body.name.length; i++) {
    var module = {
      name: req.body.name[i],
      video: upload_videos[i],
      quiz: quiz[i],
    };
    modules.push(module);
  }
  console.log(modules);
  console.log("email", req.headers.email);
  try {
    //logs
    await courses.findOneAndUpdate(
      { courseInstructor: req.headers.email },
      {
        $set: {
          courseDescription: req.body.description,

          courseCategory: req.body.category,

          courseType: req.body.course,

          courseInstructor: req.headers.email,

          modules: modules,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const addLiveClasses = async(req, res) => {
  const liveClass = new addLiveClass({
    name: req.body.name,
    description: req.body.description,
    instructor: req.body.instructor,
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
  })
  liveClass.save();
}

module.exports = {
  login,
  getInstructorDetails,
  editInstructorProfile,
  addCourse,
  getCourses,
  addQuiz,
  editCourse,
  addLiveClasses,
  getTeacher,
  changePassword,
};
