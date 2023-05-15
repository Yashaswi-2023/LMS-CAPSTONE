function changePassword() {
  const studentDetails = {
  }
  studentDetails["currentpassword"] = $("#currentPassword").val();
  studentDetails["newpassword"] = $("#newPassword").val();
  studentDetails["reenterpassword"] = $("#reEnterPassword").val();
  console.log(studentDetails);
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/studentChangePassword",
    contentType: "application/json",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    data: JSON.stringify(studentDetails),
    success: function(data) {
      document.getElementById("snackbar").innerHTML = "Password Changed Successfully";

      document.getElementById("snackbar").style = "background-color : green;";

      document.getElementById("snackbar").className = "show";

      // After 5 seconds, remove the show class from DIV

      setTimeout(function () {
        document.getElementById("snackbar").className = document

          .getElementById("snackbar")

          .className.replace("show", "");
      }, 3000);
  
    },
    error: function(err, msg) {
      if(err.status == 400) {
        document.getElementById("snackbar").innerHTML = "Passwords do not match";

        document.getElementById("snackbar").style = "background-color : red;";
  
        document.getElementById("snackbar").className = "show";
  
        // After 5 seconds, remove the show class from DIV
  
        setTimeout(function () {
          document.getElementById("snackbar").className = document
  
            .getElementById("snackbar")
  
            .className.replace("show", "");
        }, 2000);
      } if(err.status == 401) {
        document.getElementById("snackbar").innerHTML = "Please enter valid password";

        document.getElementById("snackbar").style = "background-color : red;";
  
        document.getElementById("snackbar").className = "show";
  
        // After 5 seconds, remove the show class from DIV
  
        setTimeout(function () {
          document.getElementById("snackbar").className = document
  
            .getElementById("snackbar")
  
            .className.replace("show", "");
        }, 2000);
      }
    }
  })
}