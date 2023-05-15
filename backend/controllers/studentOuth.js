const express = require("express");
const app = express();
const router = express.Router();
const session = require("express-session");
const bcrypt = require("bcryptjs");
let cors = require("cors");
app.use(cors());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const student = require("../models/userProfile");
// const userProfile = require("../models/userProfile");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const GOOGLE_CLIENT_ID =
  "448994153902-tanv6n6j3v77mimma3kjdr45t6nqrvtg.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/users/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      console.log(profile, "kll");
      const hash = bcrypt.hashSync("koushikthopu", 10);
      if (await student.findOne({ googleId: userProfile.id })) {
      } else {
        await student.create({
          googleId: userProfile.id,
          name: userProfile.displayName,
          firstname: userProfile.name.givenName,
          lastname: userProfile.name.familyName,
          email: userProfile._json.email,
          password: hash,
          profilePicture: userProfile._json.picture,
        })
      }
      done(null, userProfile);
    }
  )
);

app.get(
  "/can_auth",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    res.send("olll");
  }
);

app.get(
  "/users/auth/google/callback/",
  passport.authenticate("google", { failureRedirect: "/error" }),
  async function (req, res) {
    console.log(req.user.id);
    var empobj = await student.findOne({ googleId: req.user.id });
    console.log(empobj, "ghj");
    res.redirect(`http://localhost:5500/frontend/student/html/ksk.html?id=${empobj._id}`);
  }
);

module.exports = app;
