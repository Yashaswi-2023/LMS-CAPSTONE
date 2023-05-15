function monthValid() {
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/validity",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    data: {
      days: 30,
    },
    success: (data) => {
      document.getElementById("subSnack").innerHTML =
        "Subscribed for a month(30 days)";
      document.getElementById("snackbar").className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        document.getElementById("snackbar").className = document
          .getElementById("snackbar")
          .className.replace("show", "");
      }, 2000);
      setTimeout(function () {
        location.reload();
      }, 2100);
    },
  });
}

function yearValid() {
  $.ajax({
    type: "POST",
    url: "http://localhost:4000/validity",
    headers: {
      email: JSON.parse(sessionStorage.getItem("user")).email,
    },
    data: {
      days: 360,
    },
    success: (data) => {
      document.getElementById("subSnack").innerHTML =
        "Subscribed for a year(360 days)";
      document.getElementById("snackbar").className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        document.getElementById("snackbar").className = document
          .getElementById("snackbar")
          .className.replace("show", "");
      }, 2000);
      setTimeout(function () {
        location.reload();
      }, 2100);
    },
  });
}
