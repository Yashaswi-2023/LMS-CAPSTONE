$("#loginForm").submit(function (e) {
  // console.log("test");
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/studentlogin",
    contentType: "application/json",
    data: JSON.stringify({
      email: $("#email").val(),
      password: $("#password").val(),
    }),
    error: function (err, message) {
      if (err.status == 405) {
        document.getElementById("snackbar").innerHTML = "Wrong Password";
        document.getElementById("snackbar").style = "background-color : red;";
        document.getElementById("snackbar").className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          document.getElementById("snackbar").className = document
            .getElementById("snackbar")
            .className.replace("show", "");
        }, 2000);
      }
      if (err.status == 404) {
        document.getElementById("snackbar").innerHTML = "User Not Registered";
        document.getElementById("snackbar").style = "background-color : red;";
        document.getElementById("snackbar").className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          document.getElementById("snackbar").className = document
            .getElementById("snackbar")
            .className.replace("show", "");
        }, 2000);
      }
    },
    success: function (data) {
      //   console.log(data);
      // Add the "show" class to DIV
      // console.log(data[1]);
      sessionStorage.setItem("token",data[0]);
      sessionStorage.setItem("user",JSON.stringify(data[1]));
      document.getElementById("snackbar").innerHTML = "Logged in";
      document.getElementById("snackbar").style = "background-color : green;";
      document.getElementById("snackbar").className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        document.getElementById("snackbar").className = document
          .getElementById("snackbar")
          .className.replace("show", "");
      }, 1000);
      setTimeout(() => {
        window.location.href = "student-dashboard.html";
      }, 1000);
    },
  });
});
