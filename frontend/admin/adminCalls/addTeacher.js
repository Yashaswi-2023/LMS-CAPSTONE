function addTeacher() {
  const teacherDetails = {};
  teacherDetails["firstname"] = $("#firstname").val();
  teacherDetails["lastname"] = $("#lastname").val();
  teacherDetails["email"] = $("#email").val();
  console.log(teacherDetails);
  var found = 0;
  if (
    teacherDetails["firstname"] == "" ||
    teacherDetails["lastname"] == "" ||
    teacherDetails["email"] == ""
  ) {
    console.log("Please enter the details");
  } else {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/addTeacher",
      contentType: "application/json",
      data: JSON.stringify(teacherDetails),
      success: function (data) {
        document.getElementById("snackbar").innerHTML =
          "Teacher Added Successfully";

        document.getElementById("snackbar").style = "background-color : green;";

        document.getElementById("snackbar").className = "show";

        // After 5 seconds, remove the show class from DIV

        setTimeout(function () {
          document.getElementById("snackbar").className = document

            .getElementById("snackbar")

            .className.replace("show", "");
        }, 3000);
        console.log("Teacher Successfully Added");

        $.ajax({
          type: "POST",
          url: "http://localhost:4000/sendMailTeacherAdded",
          contentType: "application/json",
          data: JSON.stringify(teacherDetails),
          success: function (data) {
            document.getElementById("snackbar").innerHTML =
              "Mail sent to the teacher";

            document.getElementById("snackbar").style =
              "background-color : blue;";

            document.getElementById("snackbar").className = "show";

            // After 5 seconds, remove the show class from DIV

            setTimeout(function () {
              document.getElementById("snackbar").className = document

                .getElementById("snackbar")

                .className.replace("show", "");
            }, 3000);
            console.log("Teacher Successfully Added");
          },
        });
      },
      error: function (err, msg) {
        if (err.status == "401") {
          found = 1;
          document.getElementById("snackbar").innerHTML =
            "Teacher Already Enrolled";

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
}
