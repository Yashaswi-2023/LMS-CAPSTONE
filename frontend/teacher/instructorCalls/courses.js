$.ajax({

  type: "GET",
 
  url: "http://localhost:4000/getCourses",
 
  headers: {
 
   email: sessionStorage.getItem("email"),
 
  },
 
  success: (data) => {
 
   console.log(data);
 
   for (i in data) {
 
    document.getElementById("courses").innerHTML += `<div class="card">
 
       <div class="card-header text-center">
 
         <h4 class="card-title mb-0"><a onclick="setId('${data[i]._id}')">${data[i].courseName}</a></h4>
 
         <div class="rating">
 
           <i class="material-icons">star</i>
 
           <i class="material-icons">star</i>
 
           <i class="material-icons">star</i>
 
           <i class="material-icons">star</i>
 
           <i class="material-icons">star_border</i>
 
         </div>
 
       </div>
 
       <a>
 
         <img src="../../images/course.png" alt="Card image cap" style="width:100%;">
 
       </a>
 
       <div class="card-body">
 
         <small class="text-muted">${data[i].courseCategory}</small><br>
 
         ${data[i].courseDescription}<br>
 
         <span class="badge badge-primary ">${data[i].courseName}</span> 
 
       </div>
 
     </div>`;
 
   }
 
  },
 
 });
 
 
 
 