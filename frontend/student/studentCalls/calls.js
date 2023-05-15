if (window.location.href.indexOf("student-login.html") > 0) {
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://localhost:4000/student-login",
      headers: {
        token: sessionStorage.getItem("token"),
        email: JSON.parse(sessionStorage.getItem("user")).email,
      },
      error: function (err, message) {
        if (err.status == 404 || err.status == 401 || err.status == 405)
          window.location.href = "student-dashboard.html";
      },
      success: function (data) {
        console.log(data);
      },
    });
  });
}
else if (window.location.href.indexOf("student-") >= 0) {
  $(document).ready(function () {
    if(sessionStorage.getItem("user")){
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/student-dashboard",
        headers: {
          token: sessionStorage.getItem("token"),
          email: JSON.parse(sessionStorage.getItem("user")).email,
        },
        error: function (err, message) {
          if (err.status == 404 || err.status == 401)
            window.location.href = "student-login.html";
          
        },
        success: function (data) {
          // console.log(data);
        },
      });
    }
    else{
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/student-dashboard",
        headers: {
          token: sessionStorage.getItem("token"),
          // email: JSON.parse(sessionStorage.getItem("user")).email,
        },
        error: function (err, message) {
          if (err.status == 404 || err.status == 401)
            window.location.href = "student-login.html";
          
        },
        success: function (data) {
          // console.log(data);
        },
      });
    }
  });
}
if (window.location.href.indexOf("student-notes.html") > 0) {
  $(document).ready(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost:4000/notestook",
      contentType: "application/json",
      headers: {
        email: JSON.parse(sessionStorage.getItem("user")).email,
      },
      success: function (data) {
        // console.log(data);
        var stx = "";
        for (i in data) {
          var keys = Object.keys(data[i]);
          // console.log(keys);
          for (j in keys) {
            // console.log(keys[j],data[i][keys[j]])''
            stx += `<div class="card m-3">
        <h3>${keys[j]}:</h3>
        <p><i>${data[i][keys[j]]}</i></p>
        <button class="btn btn-danger w-25 float-end float-right" onclick = deleteNotes('${
          keys[j]
        }')>Delete Notes</button>
        </div>
      `;
          }
        }
        document.getElementById("notestook").innerHTML = stx;
      },
    });
  });
} else if (window.location.href.indexOf("student-dashboard") >= 0) {
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://localhost:4000/student-dashboard",
      headers: {
        token: sessionStorage.getItem("token"),
        email: JSON.parse(sessionStorage.getItem("user")).email,
      },
      error: function (err, message) {
        if (err.status == 404 || err.status == 401)
          window.location.href = "student-login.html";
        else if (err.status == 411) {
          document.getElementById("snackbar").innerHTML =
            "Subscription Expired";
          document.getElementById("snackbar").style = "background-color : red;";
          document.getElementById("snackbar").className = "show";
          // After 3 seconds, remove the show class from DIV
          setTimeout(function () {
            document.getElementById("snackbar").className = document
              .getElementById("snackbar")
              .className.replace("show", "");
          }, 1000);
          setTimeout(() => {
            window.location.href = "student-account-billing-upgrade.html";
          }, 1100);
        }
      },
      success: function (data) {
        // console.log(data);
      },
    });
  });
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/getTasks",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    success: (data) => {
      // console.log(data);
      var stx = "";
      // for (i in data) {
      // if (data[i].email == JSON.parse(sessionStorage.getItem("email")).email) {
      for (j in data.todo) {
        if (data.todo[j] !== "")
          stx += `
    <div class="mb-2">
       <li class="card"> 
        <span class="">✔ ${data.todo[j]}
        <button class="btn btn-danger p-1 float-right" onclick="doneTask('${data.todo[j]}')">Done</button></span>
      </li>
    </div>`;
      }
      // }
      // }
      document.getElementById("render").innerHTML = stx;
    },
  });
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/getValidity",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    success: (data) => {
      var end = new Date(data.subEnd);
      if (Date.now() < end.getTime()) {
        document.getElementById(
          "validity"
        ).innerHTML = `<b>Your subscription ends on ${
          data.subEnd.split("T")[0]
        }</b>`;
        document.getElementById("upgradeBtn").style.display = "none";
      } else {
        document.getElementById(
          "validity"
        ).innerHTML = `<b>Your subscription ended on ${
          data.subEnd.split("T")[0]
        }</b>`;
      }
    },
  });
} else if (
  window.location.href.indexOf("student-account-billing-upgrade.html") > 0
) {
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/student-subdetails",
    headers: {
      token: sessionStorage.getItem("token"),
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    error: function (err, message) {},
    success: function (data) {
      // console.log(data);

      // console.log("fg");
      document.getElementById("getstarted1").style.display = "none";
      document.getElementById("getstarted2").style.display = "none";
    },
  });
} else if (
  window.location.href.indexOf("student-account-billing-upgrade.html") > 0
) {
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/student-subdetails",
    headers: {
      token: sessionStorage.getItem("token"),
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    error: function (err, message) {},
    success: function (data) {
      // console.log(data);

      // console.log("fg");
      document.getElementById("getstarted1").style.display = "none";
      document.getElementById("getstarted2").style.display = "none";
    },
  });
} else if (window.location.href.indexOf("student-messages.html") > 0) {
  var demail;
  if (JSON.parse(sessionStorage.getItem("user"))) {
    demail = JSON.parse(sessionStorage.getItem("user")).email;
  }
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/student-messages",
    headers: {
      token: sessionStorage.getItem("token"),
      email: demail,
    },
    error: function (err, message) {
      if (err.status == 404 || err.status == 401)
        window.location.href = "student-login.html";
    },
    success: function (data) {
      // console.log(data);
      // console.log("fg");
    },
  });
}
// }
function deleteNotes(data1) {
  var demail = JSON.parse(sessionStorage.getItem("user")).email;

  $.ajax({
    type: "POST",

    url: "http://localhost:4000/deleteNotes",

    contentType: "application/json",

    data: JSON.stringify({
      done: data1,

      email: demail,
    }),

    success: function (data) {
      console.log();
    },
  });

  location.reload();
}
function todo() {
  var dtask = document.getElementById("inptodo").value;
  var demail = JSON.parse(sessionStorage.getItem("user")).email;
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/addTask",
    contentType: "application/json",
    data: JSON.stringify({
      task: dtask,
      email: demail,
    }),
    success: function (data) {
      // console.log(data);
      if (dtask != "")
        document.getElementById("render").innerHTML += `<div class="mb-2">
       <li class="card" > 
        <span class="">✔ ${dtask}
        <button class="btn btn-danger p-1 float-right" onclick="doneTask('${dtask}')">Done</button></span>
      </li>
    </div>`;
      document.getElementById("inptodo").value = "";
    },
  });
}
function doneTask(data1) {
  var demail = JSON.parse(sessionStorage.getItem("user")).email;
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/doneTask",
    contentType: "application/json",
    data: JSON.stringify({
      done: data1,
      email: demail,
    }),
    success: function (data) {
      console.log();
    },
  });
  location.reload();
}

function savenotes() {
  var k = document.getElementById("textnotes").value;
  var notes = k.replace(/\n/g, "<br>");
  if (document.getElementById("titlenotes").value != "") {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/savenotes",
      headers: {
        email: JSON.parse(sessionStorage.getItem("user")).email,
        notes: document.getElementById("titlenotes").value,
        text: notes,
      },
      data: JSON.stringify({
        email: JSON.parse(sessionStorage.getItem("user")).email,
        notes: document.getElementById("titlenotes").value,
        text: document.getElementById("textnotes").value,
      }),
      success: function (data) {
        location.reload();
        // alert("Notes Uploaded.");
      },
    });
  }
}
