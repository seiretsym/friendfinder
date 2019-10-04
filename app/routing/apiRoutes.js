// get friend data
var friends = require("../data/friends.js");

// export them!
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.send(friends)
    });

    app.post("/api/friends", function(req, res) {
        // do something when posted info comes in
    });
}