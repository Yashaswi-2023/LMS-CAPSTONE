$.ajax({
  type: "GET",
  url: "http://localhost:4000/getCourses",
  headers: {
    email: JSON.parse(sessionStorage.getItem("user")).email,
    token: sessionStorage.getItem("token"),
  },
  success: (data1) => {
    console.log(data1);
    data = data1[0];
    rats = data1[1];
    for (i in data) {
      document.getElementById("courses").innerHTML += `<div class="card">
            <div class="card-header text-center">
                <h4 class="card-title mb-0"><a  onclick="setId('${data[i]._id}')">${data[i].courseName}</a></h4>
                <div class="rating" id="ratingsDisp${i}">
                    
                </div>
            </div>
            <a  onclick="setId('${data[i]._id}')">
                <img src="../../courseImg.png" alt="Card image cap" style="width:100%;">
            </a>
            <div class="card-body">
                <small class="text-muted">${data[i].courseCategory}</small><br>
                ${data[i].courseDescription}<br>
                <span class="badge badge-primary ">${data[i].courseName}</span> 
            </div>
        </div>`;
    }
    for (j in rats) {
      // console.log(rats[j]);
      var brp = 0,
        i = 0;
      var ttl = 5;
      for (i = 1; i <= Math.floor(rats[j]); i++) {
        // console.log(i);
        document.getElementById(
          `ratingsDisp${j}`
        ).innerHTML += `<i class="material-icons">star</i>`;
        ttl--;
        brp = i;
      }
      // console.log(i);
      if (rats - brp > 0) {
        document.getElementById(
          `ratingsDisp${j}`
        ).innerHTML += `<i class="material-icons">star_half</i>`;
        ttl--;
      }
      // console.log(i);
      while (ttl > 0) {
        document.getElementById(
          `ratingsDisp${j}`
        ).innerHTML += `<i class="material-icons">star_border</i>`;
        ttl--;
      }
    }
  },
});
