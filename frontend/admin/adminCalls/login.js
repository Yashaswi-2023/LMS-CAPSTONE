function login() {
  const data = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/adminLogin",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      console.log("Yashaswi",data);
      sessionStorage.setItem("token", data[0]);
      sessionStorage.setItem("email", data[1].email);
      document.getElementById("snackbar").innerHTML = "Login Successful";

      document.getElementById("snackbar").style = "background-color : green;";

      document.getElementById("snackbar").className = "show";

      // After 2 seconds, remove the show class from DIV

      setTimeout(function () {
        document.getElementById("snackbar").className = document

          .getElementById("snackbar")

          .className.replace("show", "");
      }, 2000);
      setTimeout(function () {
        window.location.href = "../html/admin-dashboard.html";

      }, 2000);
    },
    error: function (err, msg) {
      console.log(err);
      if (err.status === 404) {
        document.getElementById("snackbar").innerHTML = "Wrong Email";

        document.getElementById("snackbar").style = "background-color : red;";

        document.getElementById("snackbar").className = "show";

        // After 5 seconds, remove the show class from DIV

        setTimeout(function () {
          document.getElementById("snackbar").className = document

            .getElementById("snackbar")

            .className.replace("show", "");
        }, 3000);
      }
      if (err.status === 401) {
        document.getElementById("snackbar").innerHTML = "Wrong Password";

        document.getElementById("snackbar").style = "background-color : red;";

        document.getElementById("snackbar").className = "show";

        // After 5 seconds, remove the show class from DIV

        setTimeout(function () {
          document.getElementById("snackbar").className = document

            .getElementById("snackbar")

            .className.replace("show", "");
        }, 3000);
      }
    },
  });
}
