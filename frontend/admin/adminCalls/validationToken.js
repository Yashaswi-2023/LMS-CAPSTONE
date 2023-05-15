if (window.location.href.indexOf("admin-dashboard") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-dashboard.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-account-edit") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-account-edit.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-profile") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-profile.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-courses") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-courses.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-add-teacher") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-add-teacher.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-add-assessment") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-add-assessment.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-earnings") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-earnings.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-statement") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-statement.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-change-password") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-change-password.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-verify-test") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-verify-test.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}

if (window.location.href.indexOf("admin-view-images") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/adminJWTValidate",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/admin-view-images.html";
      if (err.status == "401") window.location.href = "../html/login.html";
    },
  });
}