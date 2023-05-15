function editStudentProfile() {
  var data = new FormData($("#formdata")[0]);
  $.ajax({
    url: "http://localhost:4000/editStudentProfile",

    type: "POST",

    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },

    contentType: false,

    processData: false,

    enctype: "multipart/form-data",

    cache: false,

    data: data,

    success: (data) => {
      console.log("koushik",document.getElementById("snackbar"));

      document.getElementById("snackbar").innerHTML = "Details Updated.";

      document.getElementById("snackbar").style = "background-color : green;";

      document.getElementById("snackbar").className = "show";

      // After 5 seconds, remove the show class from DIV

      setTimeout(function () {
        document.getElementById("snackbar").className = document

          .getElementById("snackbar")

          .className.replace("show", "");
      }, 3000);
    },
  });
}
