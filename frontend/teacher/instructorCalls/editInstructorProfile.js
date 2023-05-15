
  function editInstructorProfile() {
    var data = new FormData($("#formdata")[0]);
    $.ajax({
      url: "http://localhost:4000/editInstructorProfile",

      type: "POST",

      headers: {
        email: sessionStorage.getItem("email"),
      },

      contentType: false,

      processData: false,

      enctype: "multipart/form-data",

      cache: false,

      data: data,

      success: (data) => {
        document.getElementById("snackbar").innerHTML = "Details Updated.";

        document.getElementById("snackbar").style = "background-color : green;";

        document.getElementById("snackbar").className = "show";

        // After 5 seconds, remove the show class from DIV

        setTimeout(function () {
          document.getElementById("snackbar").className = document

            .getElementById("snackbar")

            .className.replace("show", "");
        }, 3000);
        // setTimeout(function () {
        //   window.location.href = "../html/instructor-account-edit.html"
        // }, 18000);
      },
    });
  }