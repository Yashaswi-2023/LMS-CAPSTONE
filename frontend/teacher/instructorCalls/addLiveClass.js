function addLiveClass() {
  const data = {
    name: $("#title").val(),
    description: $("#description").val(),
    instructor: sessionStorage.getItem("email"),
    date: $("#date").val(),
    time: $("#time").val(),
    duration: $("#duration").val(),
  }
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/addLiveClass",
    data: data,
    success: (data) => {
      console.log("hello");
    },
  })
}