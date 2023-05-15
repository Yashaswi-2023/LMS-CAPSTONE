if (window.location.href.indexOf("student-view-course.html") >= 0) {
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/getCourseDetails",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
      token: sessionStorage.getItem("token"),
      crsid: sessionStorage.getItem("id-crs"),
    },
    success: (data) => {
      console.log(data);
      rats = data[2]
      document.getElementById(
        "instructordet"
      ).innerHTML += `<div class="media-left">
            <img src="${data[1].profilePicture}" alt="About ${data[1].firstname} ${data[1].lastname}" width="50"
                class="rounded-circle">
        </div>
        <div class="media-body">
            <h4 class="card-title"><a href="student-profile.html">${data[1].firstname} ${data[1].lastname}</a>
            </h4>
            <p class="card-subtitle">Instructor</p>
        </div><br>
        `;
      document.getElementById("location").innerHTML += `
        <a class=" btn btn-light"><i class="fa fa-map-marker"> </i> &nbsp; &nbsp;${data[1].city}, ${data[1].state}</a>
        <a target = "_blank" href="${data[1].website}" class="btn btn-light"><i class="fa fa-globe"> </i>&nbsp; &nbsp;  ${data[1].website}</a>
        `;
      document.getElementById("typeC").innerText = `${data[0].courseCategory}`;
      document.getElementById("pageView").innerText = `${data[0].courseName}`;
      document.getElementById("title").innerText = `${data[0].courseName}`;
      document.getElementById(
        "description"
      ).innerText = `${data[0].courseDescription}`;
      for (i in data[0].modules) {
        document.getElementById("curriculum").innerHTML += `
            <li class="list-group-item sidebar-menu-item p-0">
            <a class="sidebar-menu-button" href="#module${parseInt(i) + 1}">
              <div class="media">
                  <div class="media-left">
                      <div class="text-muted"><b style="color : black">${
                        parseInt(i) + 1
                      }. </b></div>
                  </div>
                  <div class="media-body">
                    <div class="text-muted-light"><b style="color : black">${
                      data[0].modules[i].name
                    }</b></div>
                  </div>
              </div>
            <a>
        </li>
        <br>
            `;
      }
      var brp = 0,
        i = 0;
      var ttl = 5;

      if (rats == null || rats == undefined) avgrat = 0;
      else avgrat = rats.averageRating;
      if (rats == null || rats == undefined) lenrat = 0;
      else lenrat = rats.ratings.length;
      for (i = 1; i <= Math.floor(avgrat); i++) {
        // console.log(i);
        document.getElementById(
          "ratingsDisp"
        ).innerHTML += `<i class="material-icons">star</i>`;
        ttl--;
        brp = i;
      }
      // console.log(i);
      if (rats - brp > 0) {
        document.getElementById(
          "ratingsDisp"
        ).innerHTML += `<i class="material-icons">star_half</i>`;
        ttl--;
      }
      // console.log(i);
      while (ttl > 0) {
        document.getElementById(
          "ratingsDisp"
        ).innerHTML += `<i class="material-icons">star_border</i>`;
        ttl--;
      }
      document.getElementById(
        "ratingsCount"
      ).innerHTML = `${lenrat} ratings`;
    },
  });
}
