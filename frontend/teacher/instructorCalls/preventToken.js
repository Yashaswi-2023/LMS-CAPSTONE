if (window.location.href.indexOf("login") >= 0) {
  console.log("hello");
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/preventToken",

    headers: {
      token: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email"),
    },
    success: (data) => {
      console.log("hello");
    },
    error: function (err, message) {
      if (err.status == "404")
        window.location.href = "../html/login.html";
      if (err.status == "401") window.location.href = "../html/instructor-dashboard.html";
    },
  });
}