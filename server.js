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
      name:" ",
      scores:[]
    }
    
];

// Routing the user to our 3 html pages

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });


// Setting up a get for reservations
app.get("/api/survey", function(req, res) {
  
    console.log(friendApp);
  
    return res.json(friendApp);
  });


// Setting up a post for reservations  
app.post("/api/survey", function(req, res) {
  friendApp.push(req.body);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
