//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.use(express.static("public")); // "public" is our static folder, allows us to render our css on browswer via server
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.urlencoded({extended: true}));  // Parse URL-encoded bodies

app.get("/", function(req, res) { // Using our home route "/"
  res.sendFile(__dirname + "/signup.html"); // This is the get route to our signup page, test on browswer at localhost:3000
});

app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName, lastName, email);

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us**region code here**.api.mailchimp.com/3.0/lists/**List ID**";  // the regional code is usually at the very end of the API Key

  const options = {
    method: "POST",
    auth: "**string:API Key************" // This string is like your name, but can be whatever, followed by : then API Key, make sure no space
  }

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
