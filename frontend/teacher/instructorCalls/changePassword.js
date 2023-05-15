function changePassword() {
  const instructorDetails = {
  }
  instructorDetails["currentpassword"] = $("#currentPassword").val();
  instructorDetails["newpassword"] = $("#newPassword").val();
  instructorDetails["reenterpassword"] = $("#reEnterPassword").val();
  console.log(instructorDetails);
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/instructorChangePassword",
    contentType: "application/json",
    headers: {
      email: sessionStorage.getItem("email"),
    },
    data: JSON.stringify(instructorDetails),
    success: function(data) {
      document.getElementById("snackbar").innerHTML = "Password Changed Successfully";

      document.getElementById("snackbar").style = "background-color : green;";

      document.getElementById("snackbar").className = "show";

      // After 5 seconds, remove the show class from DIV

      setTimeout(function () {
        document.getElementById("snackbar").className = document

          .getElementById("snackbar")

          .className.replace("show", "");
      }, 8000);
  
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
        }, 5000);
      } if(err.status == 401) {
        document.getElementById("snackbar").innerHTML = "Please enter valid password";

        document.getElementById("snackbar").style = "background-color : red;";
  
        document.getElementById("snackbar").className = "show";
  
        // After 5 seconds, remove the show class from DIV
  
        setTimeout(function () {
          document.getElementById("snackbar").className = document
  
            .getElementById("snackbar")
  
            .className.replace("show", "");
        }, 3000);
      }
    }
  })
}