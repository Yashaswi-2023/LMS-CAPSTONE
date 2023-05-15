if (window.location.href.indexOf("instructor-dashboard") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-dashboard.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-account-edit") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-account-edit.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-add-course") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-add-course.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-course-edit") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-course-edit.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-courses") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-courses.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-messages") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-messages.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-compiler") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-compiler.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-earnings") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-earnings.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-live-classes") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-live-classes.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-profile") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-profile.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-quizzes") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-quizzes.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-statement") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-statement.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("instructor-change-password") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/dashboard",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/instructor-change-password.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}