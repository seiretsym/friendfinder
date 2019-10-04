// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// database
var friends = require("./app/data/friends.js");
console.log(friends)

// set up express app
var app = express();
var PORT = 3377; // D E R P :D

// ...with bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// ...into json for... EVERYTHING!
app.use(bodyParser.json())

// route the pages
require("./app/routing/htmlRoutes.js")(app);

// open server!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});