// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up express app
var app = express();
var PORT = 3377; // D E R P :D

// ...with bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// ...for json
app.use(bodyParser.json())
// ...and text
app.use(bodyParser.text())

// route the pages
require(path.join(__dirname, "/app/routing/htmlRoutes.js"))(app);

// route the api returnsy
require(path.join(__dirname, "/app/routing/apiRoutes.js"))(app);

// open server!
app.listen(process.env.PORT || 3377, function() {
    console.log("App listening on PORT " + PORT);
});