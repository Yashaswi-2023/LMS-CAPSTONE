if (window.location.href.indexOf("student-my-courses.html") > 0) {
  $(document).ready(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost:4000/myCourses",
      headers: {
        token: sessionStorage.getItem("token"),
        email: JSON.parse(sessionStorage.getItem("user")).email,
      },
      error: (err, msg) => {
        if (err.status == 404 || err.status == 401)
          window.location.href = "student-login.html";
      },
      success: (data2) => {
        // console.log(data2);

        data = data2[0];
        data1 = data2[1];
        // console.log(data1,data);
        // for (i in data) {
        //   // console.log(data[i], data1[i]);

        // }
        var percentage = 0;
        for (i in data) {
          if (data[i]._id == data1[i].course) {
            percentage =
              (data1[i].quizPoints.completedQuizzes.length * 100) /
              (data[i].modules.length + 1);
          }
          // console.log(data[i],data1[i]);
          document.getElementById("dispCourses").innerHTML += `
                <div class="card">
                <div class="card-header">
                    <div class="media">
                        <div class="media-left">
                            <a onclick="openCourse('${data[i]._id}')">
                                <img src="../../courseImg.png" alt="Card image cap" width="100"
                                    class="rounded">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="card-title m-0"><a onclick="openCourse('${data[i]._id}')">${data[i].courseName}</a></h4>
                            <small class="text-muted">Percentage: ${percentage}%</small>
                        </div>
                    </div>
                </div>
                <div class="progress rounded-5 mx-5">
                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                        style="width: ${percentage}% " aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <a onclick="openCourse('${data[i]._id}')" class="btn btn-primary btn-sm">Start <i
                            class="material-icons btn__icon--right">play_circle_outline</i></a>
                </div>
            </div>
                `;
        }
      },
    });
  });
}
if (window.location.href.indexOf("student-profile.html") > 0) {
  $(document).ready(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost:4000/myCourses",
      headers: {
        token: sessionStorage.getItem("token"),
        email: JSON.parse(sessionStorage.getItem("user")).email,
      },
      error: (err, msg) => {
        if (err.status == 404 || err.status == 401)
          window.location.href = "student-login.html";
      },
      success: (data2) => {
        console.log(data2);
        var percentage;
        for (i in data2[0]) {
          if (data2[0][i]._id == data2[1][i].course) {
            percentage =
              (data2[1][i].quizPoints.completedQuizzes.length * 100) /
              (data2[0][i].modules.length + 1);
          }
          document.getElementById("coursesDisp").innerHTML += `
          <div class="card">
                                    <div class="card-header">
                                        <div class="d-flex align-items-center">
                                            <a class="mr-3">
                                                <img src="../../courseImg.png" alt="" class="rounded" width="100">
                                            </a>
                                            <div class="media-body">
                                                <h4 class="card-title mb-0"><a
                                                        href="student-take-course.html">${data2[0][i].courseName}</a></h4>
                                                <span class="badge badge-warning">${data2[0][i].courseCategory}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-fit">
                                    
                                    <div class="media-body mx-5">
                                        <h4 class="card-title m-0"><a >${data2[0][i].courseName}</a></h4>
                                        <small class="text-muted">Percentage: ${percentage}%</small>
                                    </div>
                                <div class="progress rounded-5 mx-5 mb-3">
                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                        style="width: ${percentage}% " aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                                        
                                    </ul>
                                </div>
          `;
        }
      },
    });
  });
}
