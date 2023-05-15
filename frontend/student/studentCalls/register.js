$("#registerForm").submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/studentregister",
    contentType: "application/json",
    data: JSON.stringify({
      name: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    }),
    error: function (err, message) {
      if (err.status == 406) {
        document.getElementById("snackbar").innerHTML =
          "User already Registered";
        document.getElementById("snackbar").style = "background-color : red;";
        document.getElementById("snackbar").className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          document.getElementById("snackbar").className = document
            .getElementById("snackbar")
            .className.replace("show", "");
        }, 2000);
      }
      if (err.status == 407) {
        document.getElementById("snackbar").innerHTML =
          message;
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
      document.getElementById("snackbar").style = "background-color : green;";
      document.getElementById("snackbar").innerHTML = "Registered Succesfully";
      document.getElementById("snackbar").className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        document.getElementById("snackbar").className = document
          .getElementById("snackbar")
          .className.replace("show", "");
      }, 500);
      setTimeout(() => {
        window.location.href = "student-login.html";
      }, 500);
    },
  });
});
