function login() {
  const data = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  console.log(data);
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/instructorLogin",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      sessionStorage.setItem("token", data[0]);
      sessionStorage.setItem("email", data[1].email);
      document.getElementById("snackbar").style = "background-color : green;";

      document.getElementById("snackbar").className = "show";

      // After 3 seconds, remove the show class from DIV

      setTimeout(function () {
        document.getElementById("snackbar").className = document

          .getElementById("snackbar")

          .className.replace("show", "");
      }, 3000);
      setTimeout(()=>{

        window.location.href = "../html/instructor-dashboard.html";
      },1100)
    },
    error: function (err, msg) {
      console.log(err);
      if (err.status ==405) {
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
      if (err.status ==404) {
        document.getElementById("snackbar").innerHTML = "User Not registered";

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
  });
}
