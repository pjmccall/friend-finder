// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting variable for reservation submissions
var friendApp = [
    {
      name:"John Doe",
      scores:[
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
  
    },
    {
      name:"Jack Black",
      scores:[
        "5",
        "4",
        "4",
        "1",
        "4",
        "1",
        "5",
        "5",
        "4",
        "3"
      ]
  
    },
    {
      name:"Sarah Jessica",
      scores:[
        "5",
        "5",
        "3",
        "3",
        "1",
        "1",
        "5",
        "4",
        "4",
        "1"
      ]
  
    }   
];

// Routing the user to our 3 html pages

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });


// Setting up a get for friend surveys  
app.get("/api/friends", function(req, res) {
  
    console.log(friendApp);
  
    return res.json(friendApp);
  });


// Setting up a post for friend surveys  
app.post("/api/friends", function(req, res) {
  friendApp.push(req.body);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
