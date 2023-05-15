$.ajax({
  type: "GET",
  url: "http://localhost:4000/getInstructorDetails",
  contentType: "application/json",
  headers: {
   email: sessionStorage.getItem("email"),
  },
  success: function (data) {
    console.log(data);
    if(data.firstname == "undefined") 
    data.firstname = "";
    if(data.lastname == "undefined") 
    data.lastname = "";
    if(data.email == "undefined") 
    data.email = "";
    if(data.website == "undefined") 
    data.website = "";
    if(data.occupation == "undefined") 
    data.occupation = "";
    if(data.companyName == "undefined") 
    data.companyName = "";
    if(data.phoneNumber == "undefined") 
    data.phoneNumber = "";
    if(data.address == "undefined") 
    data.address = "";
    if(data.city == "undefined") 
    data.city = "";
    if(data.state == "undefined") 
    data.state = "";
    if(data.pincode == "undefined") 
    data.pincode = "";
    console.log(data);
    if (data.profilePicture != undefined) {
      document.getElementById("avatar").src = data.profilePicture;
      document.getElementById("avatar_main").src = data.profilePicture;
    }
    document.getElementById("name").innerText = (data.firstname + " " + data.lastname) != undefined ? (data.firstname + " " + data.lastname) : "";
    document.getElementById("email").value = data.email != undefined ? data.email : "";
    document.getElementById("website").value = data.website != undefined ? data.website : "";
    document.getElementById("occupation").value = data.occupation != undefined ? data.occupation : "";
    document.getElementById("companyName").value = data.companyName != undefined ? data.companyName : "";
    document.getElementById("phoneNumber").value = data.phoneNumber != undefined ? data.phoneNumber : "";
    document.getElementById("address").value = data.address != undefined ? data.address : "";
    document.getElementById("city").value = data.city != undefined ? data.city : "";
    document.getElementById("state").value = data.state != undefined ? data.state : "";
    document.getElementById("pincode").value = data.pincode != undefined ? data.pincode : "";
    $("#email").val(data.email);
  },
  error: function (err, msg) {
    //alert("Please enter valid details");
  }
});