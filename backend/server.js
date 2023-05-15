const multer = require("multer");

const bodyParser = require("body-parser");
const { uploadFile } = require("./middlewares/s3");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const { converBase64ToImage } = require("convert-base64-to-image");
const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const path = require("path");
const io = require("./socket");
// const Razorpay = require("razorpay");

// const chat = require("./routes/chat")
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const adminAsessments = require("./models/adminAssessments");
const userProfile = require("./models/userProfile");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");
app.use(cookieParser());
const main_p = path.join(__dirname, "/../");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
const middlewares = require('./middlewares');
app.use(middlewares.setHeaders);
const routes = require('./routes');
app.use('/github_api', routes);
// app.get('/', (req,res)=>{
//     res.send('Welcome to Github NodeJS API app!')
// })
mongoose.connect(
  "mongodb+srv://pkoushik347:hanBrQ6gATjxkVoR@cluster.nrkje1d.mongodb.net/learnplus"
).then;
{
  console.log("The database is connected : ATLAS");
}

const teacher = require("./models/instructorProfile");
const admin = require("./models/adminProfile");
const addAssessments = require("./models/adminAssessments");
// const hash = bcrypt.hashSync("learnPlus@123", 10);
// const learnPlus = new admin({
//   firstname: "Maktala",
//   lastname: "Durga Prasad",
//   email: "kuttugoud28890@gmail.com",
//   password: hash,
// });
// learnPlus.save();
app.use("/", require("./routes/adminRoute"));
app.use("/", require("./routes/instructorRoute"));
app.use("", require("./controllers/studentOuth"));
app.use("/", require("./routes/chat"));
app.use("/teachers", require("./routes/passportteacher"));
app.use("/", require("./routes/studentRoutes"));
const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

app.use(bodyParser.json());

// app.get("/", function (req, res) {
//   res.send({
//     message: "Default route in email tutorial project",
//   });
// });
app.post("/payment", async (req, res) => {
  let { amount } = req.body;

  var instance = new Razorpay({
    key_id: "rzp_test_sx8NkpT8TxSC7k",
    key_secret: "7XA6LTbKxE8Ug0UYqPGR4Dc6",
  });

  let order = await instance.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt#1",
  });
  res.status(201).json({
    succes: true,
    order,
    amount,
  });
});
var imagesOfTest = [];

var count = 0;

app.post("/snapshot", async (req, res) => {
  // console.log(req.headers,72);
  var uploadpicture = "";

  uploadpicture = generateFileName();

  count++;

  images = req.body.image;

  // console.log(images);

  var base64Str = images;

  var path1 = "./testimages/";

  var imageInfo = converBase64ToImage(
    base64Str,
    path1 + uploadpicture + ".png"
  );

  var temp = fs.createReadStream(path1 + uploadpicture + ".png");

  const tem = await uploadFile(
    temp,

    uploadpicture,

    "image/png"
  );

  uploadpicture = "https://learnx.s3.us-east-2.amazonaws.com/" + uploadpicture;

  console.log(uploadpicture);

  imagesOfTest.push(uploadpicture);
  console.log(imagesOfTest);
  var im = {
    email: req.headers.name,
    images: imagesOfTest,
  };

  await userProfile
    .findOneAndUpdate(
      { email: req.headers.email },
      {
        $set: {
          adminTestImages: im,
        },
      }
    )
    .then();
    // console.log(req.headers);
    await userProfile
    .findOneAndUpdate(
      { email: req.headers.email },
      {
        $set: {
          adminTestMarks: parseInt(req.headers.scores),
        },
      }
    )
    .then();
});

const myOAuth2Client = new OAuth2(
  "595698475780-v40o9e17jju557sq7ftr4ajsnet4d87k.apps.googleusercontent.com",

  "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",

  "https://developers.google.com/oauthplayground"
);

app.get("/", async (req, res) => {
  res.redirect("http://localhost:5500/frontend/lms-switch.html");
});
app.listen(4000, (req, res) => {
  console.log("http://localhost:4000/");
});
