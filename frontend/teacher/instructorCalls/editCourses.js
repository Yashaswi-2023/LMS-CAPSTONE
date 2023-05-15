$(document).ready(() => {
  $("#formdata").submit(function () {
    var data = new FormData($("#formdata")[0]);
    console.log(data);
    $.ajax({
      url: "http://localhost:4000/editCourse",

      type: "POST",

      headers: {
        email: sessionStorage.getItem("email")
      },

      contentType: false,

      processData: false,

      enctype: "multipart/form-data",

      cache: false,

      data: data,

      success: (data) => {
        console.log("hello");
      },
    });
  });
});
