const mongoose = require("mongoose");

const user = {
  googleId: {
    type: String,
  },

  name: {
    type: String,

    required: true,

    minlength: 1,

    maxlength: 40,
  },

  firstname: {
    type: String,

    required: true,

    minlength: 1,

    maxlength: 40,
  },

  lastname: {
    type: String,

    minlength: 1,

    maxlength: 40,
  },

  email: {
    type: String,

    required: true,

    minlength: 8,

    maxlength: 50,
  },

  password: {
    type: String,

    required: true,

    minlength: 8,
  },

  profilePicture: {
    type: String,
  },

  coursesEnrolled: [
    {
      course: {
        type: String,
      },

      quizPoints: {
        completedQuizzes: [
          {
            type: String,
          },
        ],

        totalPoints: {
          type: Number,

          default: 0,
        },
      },
    },
  ],

  occupation: {
    type: String,
  },

  companyName: {
    type: String,
  },

  phone: {
    type: String,

    length: 10,
  },

  address: {
    type: String,
  },

  city: {
    type: String,
  },

  state: {
    type: String,
  },

  postcode: {
    type: String,

    length: 6,
  },

  github: {
    username: {
      type: String,

      minlength: 4,

      maxlength: 20,
    },

    token: {
      type: String,

      minlength: 4,

      maxlength: 5,
    },
  },

  earnedBadges: [
    {
      name: {
        type: String,
      },

      course: [
        {
          type: mongoose.Schema.Types.ObjectId,

          ref: "Course",
        },
      ],

      image: {
        type: String,
      },
    },
  ],

  todo: {
    type: Array,
  },

  notes: {
    type: Array,
  },

  subStart: {
    type: Date,
  },

  subEnd: {
    type: Date,
  },

  github: {
    type: String,
  },
  adminTestImages : {
    type : Array,
  },
  adminTestMarks : {
    type :Number
  }
};

module.exports = mongoose.model("students", user);
