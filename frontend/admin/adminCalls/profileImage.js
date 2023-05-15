$.ajax({
  type: "GET",
  url: "http://localhost:4000/getAdminDetails",
  contentType: "application/json",
  headers: {
    email: sessionStorage.getItem("email"),
  },
  success: function (data) {
    console.log(data.profilePicture);
    if (data.profilePicture != undefined) {
      document.getElementById("avatar_main").src = data.profilePicture;
    }
  },
  error: function (err, msg) {
    //alert("Please enter valid details");
  },
});
