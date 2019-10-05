// get friend data
var friends = require("../data/friends.js");

// export them!
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        // make a friend object!
        var friend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }

        // add friend to databases!
        friends.push(friend)

        // do some magic to find the best matching friend!
        var score = req.body.scores;

    });
}