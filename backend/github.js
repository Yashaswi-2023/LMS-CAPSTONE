var https = require("https");
var userName = "pkoushik347";
var options = {
  host: "api.github.com",
  path: "/users/" + userName + "/repos",
  method: "GET",
  headers: {
    "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
  },
};
var repos = [];
var request = https.request(options, function (response) {
  var body = "";
  response.on("data", function (chunk) {
    body += chunk;
  });
  response.on("end", function () {
    var json = JSON.parse(body);

    console.log(json);

    //json.forEach(function(repo){
    //    repos.push({
    //        name : repo.name,
    //        description : repo.description
    //    });
    //});
    // console.log('the repos are  '+ JSON.stringify(repos));
    for (i in json) {
      repos.push(json[i].full_name);
    }
    console.log(repos);
  });
});

request.end();

  var languages = {
    host: "api.github.com",
    path: "/repos" + repos[0] + "/languages",
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
    },
  };
  // var request1 = https.request(languages, function (response) {
  //   var body1 = "";
  //   console.log("yashassaa")
  //   response.on("data", function (chunk) {
  //     body1 += chunk;
  //   });
  //   response.on("end", function () {
  //     var json1 = JSON.parse(body1);
  //     var repos = [];
  //     console.log("languages", json1);
  //   });
  // });
  // request1.on("error", function (e) {
  //   console.error("and the error is " + e);
  // });
  // request1.end();
