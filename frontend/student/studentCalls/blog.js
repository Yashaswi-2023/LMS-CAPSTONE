$(document).ready(() => {
  $("#blogdata").submit((e) => {
    e.preventDefault();
    // console.log("ftej");
    var data = new FormData($("#blogdata")[0]);
    // console.log(data);
    $.ajax({
      url: "http://localhost:4000/student-blog",
      type: "POST",
      contentType: false,
      processData: false,
      enctype: "multipart/form-data",
      cache: false,
      headers: {
        email: JSON.parse(sessionStorage.getItem("user")).name,
      },
      data: data,
      success: function (data) {
        // console.log(data);
        document.getElementById("snackbar").className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          document.getElementById("snackbar").className = document
            .getElementById("snackbar")
            .className.replace("show", "");
        }, 500);
        setTimeout(() => {
          location.reload();
        }, 500);
      },
    });
  });
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/showBlogs",
    success: function (data) {
      //   console.log(data);
      for (i in data.reverse()) {
        document.getElementById("blogs").innerHTML += `
        <div class="card">
                <div class="card-body">
                    <div class="d-flex mb-1">
                        <div class="avatar avatar-sm mr-3">
                            <img src="../images/people/50/woman-5.jpg" alt="Avatar"
                                class="avatar-img rounded-circle">
                        </div>
                        <div class="flex">
                            <div class="d-flex align-items-center mb-1">
                                <strong class="text-15pt">${data[i].createdBy}</strong>
                                <small class="ml-auto text-muted">Posted on :${data[i].date.split("T")[0]}<br>
                                Time :${data[i].date.split("T")[1].split(".")[0]}</small>
                            </div>
                            <div>
                                <b>${data[i].title}</b>
                            </div>

                            <a href="" class="card my-3 text-body text-decoration-0">
                                <img src="${data[i].imglink}"
                                    alt="image" class="card-img-top">
                                <span class="card-footer d-flex flex-column">
                                    <span class="text-black-70">${data[i].blogdesc}</span>
                                </span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>`;
      }
    },
  });
});
