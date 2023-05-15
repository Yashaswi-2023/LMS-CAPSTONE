$.ajax({
  type: "GET",
  url: "http://localhost:4000/getCourses",
  headers: {
    email: sessionStorage.getItem("email"),
  },
  success: function(data) {
    for(i in data) {
      document.getElementById("courses").innerHTML += `
      <option value=${data[i].courseName}>${data[i].courseName}</option>`
    }
  }
})