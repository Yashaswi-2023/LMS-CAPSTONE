const users = require("../models/userProfile");
const conv = require("../models/conversations");
const course = require("../models/courses");
const reviews = require("../models/courseAnalysis");
const live = require("../models/liveClasses");
const messages = require("../models/messages");
const teacher = require("../models/instructorProfile");
const blogtable = require("../models/blog");
const assessment = require("../models/finalCourseAssessment");
const { uploadFile } = require("../middlewares/s3");
const mongoose = require("mongoose");
const crypto = require("crypto");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { request } = require("http");
dotenv.config();
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
const register = async (req, res) => {
  // console.log(req);
  try {
    const k = await users.findOne({ email: req.body.email });
    if (k == null) {
      var salt = bycrypt.genSaltSync(10);
      var hash = bycrypt.hashSync(req.body.password, salt);
      const usr = new users({
        name: req.body.name,
        firstname: req.body.name.split(" ")[0],
        lastname: req.body.name.split(" ")[1],
        email: req.body.email,
        password: hash,
      });
      usr.save().then(() => {
        res.send(req.body);
      });
    } else {
      res.statusCode = 406;
      res.send("already registered");
    }
  } catch (error) {
    res.statusCode = 407;
    res.send(error);
  }
};
const studentlogin = async (req, res) => {
  try {
    await users.findOne({ email: req.body.email }).then((data) => {
      if (bycrypt.compareSync(req.body.password, data.password)) {
        // console.log("d");
        var hash = bycrypt.hashSync(req.body.password, 10);
        const accessToken = jwt.sign(
          {
            user: {
              username: req.body.email,
              password: hash,
            },
          },
          process.env.TOKENs,
          { expiresIn: "60m" }
        );
        //   console.log(data);
        res.send([accessToken, data]);
      } else {
        res.statusCode = 405;
        res.send("wrong password");
      }
    });
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
};
const usrdet = async (req, res) => {
  // console.log(req.headers.email);
  try {
    var data = await users.findOne({ email: req.headers.email });
    // console.log(data);
    end = 0;
    if (data) {
      end = new Date(data.subEnd);
      if (Date.now() < end.getTime()) {
        res.send(data);
      } else {
        res.statusCode = 411;
        res.send("ok");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const bcrypt = require("bcryptjs");
const changePassword = async (req, res) => {
  try {
    console.log("yashaakjslkadh", req.body);
    console.log("tzfdaxhgsadijklfg", req.headers);
    const data = await users.findOne({ email: req.headers.email });
    console.log("sahithisodpfg'hjk", data);
    var hash = bcrypt.hashSync(req.body.newpassword, 10);
    console.log(hash,43);
    if (bcrypt.compareSync(req.body.currentpassword, data.password)) {
      if (req.body.reenterpassword == req.body.newpassword) {
        var k = await users.findOneAndUpdate(
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

const userdet1 = async (req, res) => {
  // console.log(req.headers.email);
  try {
    var data = await users.findOne({ email: req.headers.email });
    // console.log(data);
    var end = new Date(data.subEnd);
    if (Date.now() < end.getTime()) {
      res.send(data);
    } else {
      res.statusCode = 411;
      res.send();
    }
  } catch (error) {
    console.log(error);
  }
};
const addBlog = async (req, res) => {
  //   console.log(req.body);
  //   console.log(req.file);
  var file = req.file;
  var imageName = generateFileName();
  //   console.log(imageName);
  const tem = await uploadFile(file.buffer, imageName, file.mimetype);
  let obj1 = await blogtable.create({
    title: req.body.titlenotes,
    imglink: "https://learnx.s3.us-east-2.amazonaws.com/" + imageName,
    blogdesc: req.body.textnotes,
    createdBy: req.headers.email,
    date: Date.now(),
  });
  //   console.log(obj1);
  res.send("successfully added to table");
};
const showBlogs = async (req, res) => {
  // console.log("ts");
  await blogtable.find({}).then((data) => {
    res.send(data);
  });
};
const addTask = async (req, res) => {
  await users
    .findOneAndUpdate(
      { email: req.body.email },
      { $push: { todo: req.body.task } }
    )
    .then(console.log("updated tasks"));
  await users.findOne({ email: req.body.email }).then((data) => {
    res.send(data.todo);
  });
};
const doneTask = async (req, res) => {
  await users
    .findOneAndUpdate(
      { email: req.body.email },
      { $pull: { todo: req.body.done } }
    )
    .then(console.log("removed tasks"));
};
const getTasks = async (req, res) => {
  await users
    .findOne({ email: req.headers.email }, { todo: 1 })
    .then((data) => {
      res.send(data);
    });
};
const savenotes = async (req, res) => {
  var title = req.headers.notes;
  var notes = req.headers.text;
  var mynotes = {};
  mynotes[title] = notes;
  await users.findOneAndUpdate(
    { email: req.headers.email },
    { $push: { notes: mynotes } }
  );
  res.send();
};
const notestook = async (req, res) => {
  // console.log("arr");
  await users.findOne({ email: req.headers.email }).then((data) => {
    res.send(data.notes);
  });
};
const deleteNotes = async (req, res) => {
  var dlt = req.body.done;

  var dltD;

  await users.findOne({ email: req.body.email }).then((data) => {
    // console.log(data.notes);
    var abc = data.notes;
    for (i in abc) {
      if (Object.keys(abc[i]) == dlt) {
        console.log(abc.findIndex((a) => a[dlt] == dlt));
        if (abc.findIndex((a) => a[dlt] == dlt) == -1)
          abc.splice(abc.findIndex((a) => a[dlt] == dlt) + 1, 1);
        else
          abc.splice(
            abc.findIndex((a) => a[dlt] == dlt),
            1
          );
      }
    }
    // console.log(abc)
    dltD = abc;
    // dltD = Object.keys(data.notes);
  });
  // console.log(dltD);
  // console.log(dlt,dltD);
  // var myob = { dlt: dltD };
  await users.findOneAndUpdate(
    { email: req.body.email },

    { $set: { notes: dltD } }
  );
};
const subscribe = async (req, res) => {
  // console.log(req.headers);
  var date = new Date(
    new Date().getTime() + parseInt(req.headers.days) * 86400000
  );
  console.log(date);
  //  console.log(date,parseInt(req.body.days)*86400000);
  await users.findOneAndUpdate(
    { email: req.headers.email },
    {
      subStart: Date.now(),
      subEnd: date,
    }
  );
  res.send("Subscribed");
};
const getValidity = async (req, res) => {
  await users
    .findOne({ email: req.headers.email }, { subStart: 1, subEnd: 1 })
    .then((data) => {
      res.send(data);
    });
};
const getUserById = async (req, res) => {
  var data = await teacher.findOne({ _id: req.headers.opid });
  console.log(data);
  res.send(data);
};
const getTserById = async (req, res) => {
  var data = await users.findOne({ _id: req.headers.opid });
  console.log(data);
  res.send(data);
};
const getAll = async (req, res) => {
  // console.log("hfiubgcskinfeahelkhgjeghelir");
  // console.log(req, 707);
  var data = await req.body.base.find({});
  console.log(data);
  res.send(data);
};
const getAllt = async (req, res) => {
  var data = await users.find({});
  console.log(data);
  res.send(data);
};
const getCourses = async (req, res) => {
  try {
    var data = await course.find({});
    console.log(data);
    var rats = [];
    for (i in data) {
      var rat = await reviews.findOne({ course: data[i]._id });
      console.log(rat);
      if (rat != undefined || rat != null) {
        if (rat.averageRating != null || rat.averageRating != undefined)
          rats.push(rat.averageRating);
      } else {
        rats.push(0);
      }
    }
    res.send([data, rats]);
    // });
  } catch (error) {
    console.log(error);
  }
};
const getCourseDetails = async (req, res) => {
  // console.log(req.headers);
  var data = await course.findOne({ _id: req.headers.crsid });
  var data1 = await teacher.findOne({ email: data.courseInstructor });
  // console.log(data1);
  var rats = await reviews.findOne({ course: req.headers.crsid });
  res.send([data, data1, rats]);
};
const getDetailsOfUser = async (req, res) => {
  var data = await users.findOne({ email: req.headers.email });
  res.send(data);
};
const buyCourse = async (req, res) => {
  // console.log(req.body);
  // res.send("fake")
  var studs = await course.findOne(
    { _id: req.body.crsid },
    { studentsEnrolled: 1 }
  );
  try {
    if (
      studs.studentsEnrolled == undefined ||
      studs.studentsEnrolled.indexOf(req.body.stud) < 0
    ) {
      console.log(req.body, 277);
      await course.findOneAndUpdate(
        { _id: req.body.crsid },
        {
          $push: {
            studentsEnrolled: req.body.stud,
          },
        }
      );
      await users.findOneAndUpdate(
        { email: req.body.stud },
        {
          $push: {
            coursesEnrolled: { course: req.body.crsid, quizPoints: {} },
          },
        }
      );
      res.send("added");
    } else {
      res.statusCode = 409;
      res.send("duplicate");
    }
  } catch (error) {
    console.log(error);
  }
};
const myCourses = async (req, res) => {
  courses = [];
  var enrolledID = (
    await users.find(
      { email: req.headers.email },
      { _id: 0, coursesEnrolled: 1 }
    )
  )[0];
  console.log(enrolledID);
  for (i in enrolledID.coursesEnrolled) {
    var studCourse = await course.findOne(
      { _id: enrolledID.coursesEnrolled[i].course },
      { studentsEnrolled: 0 }
    );
    if (!courses.includes(studCourse)) courses.push(studCourse);
    // console.log(studCourse);
  }
  // console.log(courses[0].modules);
  res.send([courses, enrolledID.coursesEnrolled]);
};
const addTestDetails = async (req, res) => {
  console.log(req.headers);
  var data = (await users.findOne({ _id: req.headers.studentid }))
    .coursesEnrolled;
  // console.log(data);

  for (i in data) {
    if (data[i].course == req.headers.courseid) {
      var modlen = data[i].quizPoints.completedQuizzes.length;
      if (
        !data[i].quizPoints.completedQuizzes.includes(
          `${req.headers.courseid}${req.headers.moduleno}`
        )
      ) {
        data[i].quizPoints.completedQuizzes.push(
          `${req.headers.courseid}${req.headers.moduleno}`
        );
        data[i].quizPoints.totalPoints =
          (data[i].quizPoints.totalPoints * modlen +
            parseInt(req.headers.scoreresponse)) /
          (modlen + 1);
      } else {
        res.statusCode = 347;
        console.log("already took quiz");
        // res.send()
      }
    }
  }
  // console.log(data);
  var data = await users
    .findOneAndUpdate(
      { _id: req.headers.studentid },
      { $set: { coursesEnrolled: data } }
    )
    .then(() => {
      res.send("success");
    });
};
const getAssessment = async (req, res) => {
  // console.log(req.headers);
  var data = await assessment.findOne({ courseName: req.headers.crsname });

  res.send(data);
};
const getTestQuestions = async (req, res) => {
  // console.log(req.headers);
  var data = await assessment.findOne({ _id: req.headers.id });
  res.send(data);
};
const evaluate = async (req, res) => {
  // console.log(req.body);
  var sol = (await assessment.findOne({ _id: req.body.testid })).questions[
    parseInt(req.body.quesno)
  ];
  // console.log(req.headers);
  // console.log(sol);
  // console.log(req.body.solution.trim().replace(/(\r\n|\r|\n)/g, ' ')==sol.hiddenTestOutput.trim().replace(/(\r\n|\r|\n)/g, ' '));

  res.send(
    req.body.solution.trim().replace(/(\r\n|\r|\n)/g, " ") ==
      sol.hiddenTestOutput.trim().replace(/(\r\n|\r|\n)/g, " ")
  );
};
const evaluate1 = async (req, res) => {
  console.log(req.body);
  var sol = (await adminAssessments.findOne({ title: req.body.courseid }))
    .questions[parseInt(req.body.quesno)];
  // console.log(req.headers);
  console.log(sol);
  // console.log(req.body.solution.trim().replace(/(\r\n|\r|\n)/g, ' ')==sol.hiddenTestOutput.trim().replace(/(\r\n|\r|\n)/g, ' '));

  res.send(
    req.body.solution.trim().replace(/(\r\n|\r|\n)/g, " ") ==
      sol.hiddenTestOutput.trim().replace(/(\r\n|\r|\n)/g, " ")
  );
};

const leaderboard = async (req, res) => {
  try {
    var data = await users.aggregate([
      {
        $unwind: "$coursesEnrolled",
      },
      {
        $group: {
          _id: { _id: "$_id", name: "$name", email: "$email", profilePicture : "$profilePicture" },
          points: { $sum: "$coursesEnrolled.quizPoints.totalPoints" },
        },
      },
      {
        $sort : {points : -1}
      },
      {
        $project: {
          name: 1,
          email: 1,
          profilePicture : 1,
          points: 1,
        },
      },
    ]);
    console.log(data);
    res.send(data);
  } catch(error) {
    console.log(error);
  }
};
const addScore = async (req, res) => {
  // console.log(req.headers.scores);
  // var sum = 0;
  // for (i in req.headers.scores) {
  //   sum += parseInt(req.headers.scores[i]);
  // }
  var data = (await users.findOne({ _id: req.headers.id })).coursesEnrolled;
  // console.log(data);
  for (i in data) {
    if (data[i].course == req.headers.courseid) {
      if (
        !data[i].quizPoints.completedQuizzes.includes(`${req.headers.testid}`)
      ) {
        console.log(req.headers.scores);
        data[i].quizPoints.completedQuizzes.push(`${req.headers.testid}`);
        data[i].quizPoints.totalPoints =
          data[i].quizPoints.totalPoints / 2 + parseInt(req.headers.scores) / 2;
      } else {
        res.statusCode = 347;
        console.log("already took quiz");
        // res.send()
      }
    }
  }
  console.log(data);
  var data = await users
    .findOneAndUpdate(
      { _id: req.headers.id },
      { $set: { coursesEnrolled: data } }
    )
    .then(() => {
      res.send("success");
    });
};
const snapshot = async (req, res) => {};
const { ObjectId } = require("mongodb");
const adminAssessments = require("../models/adminAssessments");
const userProfile = require("../models/userProfile");
const addRatings = async (req, res) => {
  var rats;
  // console.log("test");
  // var ratings;
  try {
    reviews.findOne({ course: req.headers.id }).then((data) => {
      // console.log(data);
      if (data == null || data == undefined) {
        reviews
          .create({
            course: req.headers.id,
            ratings: [
              {
                given: req.headers.stud,
                rating: parseInt(req.headers.ratings),
              },
            ],
            reviews: [
              {
                given: "",
                rating: "",
              },
            ],
            averageRating: parseInt(req.headers.ratings),
          })
          .then(() => {
            // console.log("created");
            res.send();
          });
      } else {
        var k = 0;

        var rcount = 0;

        var total_rating = 0;

        for (i in data.ratings) {
          rcount = rcount + 1;

          total_rating = total_rating + data.ratings[i].ratings;

          if (data.ratings[i].given == req.headers.stud) {
            k = 1;
            // console.log("testtttttttttttttttttttttttt");
            var datar = {
              ratings: parseInt(req.headers.ratings),

              given: req.headers.stud,
            };
            total_rating = 0;
            total_rating = total_rating + parseInt(req.headers.ratings);

            var average_rating = total_rating / rcount;

            reviews

              .findOneAndUpdate(
                { course: req.headers.id },

                { $set: { ratings: datar } }
              )

              .then();

            reviews
              .findOneAndUpdate(
                { course: req.headers.id },

                { $set: { averageRating: average_rating } }
              )
              .then(res.send());
          }
        }

        var datar = {
          ratings: parseInt(req.headers.ratings),

          given: req.headers.stud,
        };

        if (k == 0) {
          total_rating = total_rating + parseInt(req.headers.ratings);

          rcount = rcount + 1;

          var average_rating = total_rating / rcount;

          reviews

            .findOneAndUpdate(
              { course: req.headers.id },

              { $push: { ratings: datar } }
            )

            .then();

          reviews
            .findOneAndUpdate(
              { course: req.headers.id },

              { $set: { averageRating: average_rating } }
            )
            .then(res.send());

          // res.send(data.ratings);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const getGit = async(req,res)=>{
  var data = await userProfile.findOne({email : req.headers.email})
  res.send(data)
}

const editStudentProfile = async (req, res) => {
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
    await users.findOneAndUpdate(
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

const getStudentDetails = async (req, res) => {
  try {
    console.log("yashhhhhhhhhhhhh", req.headers.email);
    await users
      .findOne({ email: req.headers.email })
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  studentlogin,
  usrdet,
  addBlog,
  showBlogs,
  addTask,
  doneTask,
  getTasks,
  notestook,
  savenotes,
  deleteNotes,
  subscribe,
  getValidity,
  userdet1,
  getUserById,
  getAll,
  getCourses,
  getCourseDetails,
  buyCourse,
  myCourses,
  addTestDetails,
  getAssessment,
  getTestQuestions,
  evaluate,
  addScore,
  getTserById,
  getAllt,
  addRatings,
  getDetailsOfUser,
  snapshot,
  evaluate1,
  leaderboard,
  getGit,
  changePassword,
  editStudentProfile,
  getStudentDetails,
};
