$.ajax({
  type: "GET",
  url: "http://localhost:4000/getStudentDetails",
  contentType: "application/json",
  headers: {
    email: JSON.parse(sessionStorage.getItem("user")).email,
  },
  success: function (data) {

    if(data.firstname == "undefined" || data.firstname == null) 
    data.firstname = "";
    if(data.lastname == "undefined" || data.lastname == null) 
    data.lastname = "";
    if(data.email == "undefined" || data.email == null) 
    data.email = "";
    if(data.website == "undefined" || data.website == null) 
    data.website = "";
    if(data.occupation == "undefined" || data.occupation == null) 
    data.occupation = "";
    if(data.companyName == "undefined" || data.companyName == null) 
    data.companyName = "";
    if(data.phoneNumber == "undefined" || data.phoneNumber == null) 
    data.phoneNumber = "";
    if(data.address == "undefined" || data.address == null) 
    data.address = "";
    if(data.city == "undefined" || data.city == null) 
    data.city = "";
    if(data.state == "undefined" || data.state == null) 
    data.state = "";
    if(data.pincode == "undefined" || data.pincode == null) 
    data.pincode = "";
    console.log(data);
    document.getElementById("firstName").value =
      data.firstname != undefined ? data.firstname : "";
    document.getElementById("lastName").value =
      data.lastname != undefined ? data.lastname : "";
    document.getElementById("email").value =
      data.email != undefined ? data.email : "";
    document.getElementById("website").value =
      data.website != undefined ? data.website : "";
    document.getElementById("occupation").value =
      data.occupation != undefined ? data.occupation : "";
    document.getElementById("companyName").value =
      data.companyName != undefined ? data.companyName : "";
    document.getElementById("phoneNumber").value =
      data.phoneNumber != undefined ? data.phoneNumber : "";
    document.getElementById("address").value =
      data.address != undefined ? data.address : "";
    document.getElementById("city").value =
      data.city != undefined ? data.city : "";
    document.getElementById("state").value =
      data.state != undefined ? data.state : "";
    document.getElementById("pincode").value =
      data.pincode != undefined ? data.pincode : "";
    $("#email").val(data.email);
    if(data.profilePicture!=undefined) {
    document.getElementById("Avatar").src = data.profilePicture;
    document.getElementById("avatar").src = data.profilePicture;
    } 
  },
  error: function (err, msg) {
    //alert("Please enter valid details");
  },
});
