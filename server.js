// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up express app
var app = express();
var PORT = 3377; // D E R P :D

// ...with bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// ...into json for... EVERYTHING!
app.use(bodyParser.json())

// route the pages
require(path.join(__dirname, "/app/routing/htmlRoutes.js"))(app);

// route the api returns
require(path.join(__dirname, "/app/routing/apiRoutes.js"))(app);

// open server!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

