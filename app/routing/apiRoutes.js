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
        // do some magic to find the best food friend
        var score = req.body.scores;

        // create a match score
        var match = 40; // because 5-1 = 4 and 10*4 = 40, so the worst friend has a highest of 40
        var friendIndex = 0;

        // compare each friend...
        friends.forEach(function(bff, index) {
            var diff = 0;
            // loop through scores...
            for (var i = 0; i < 10; i++) {
                // calculate diff by comparing scores
                diff += Math.abs(bff.scores[i] - score[i]);
            }
            // if this friend is better...
            if (diff < match) {
                // change match score
                match = diff;
                // also save the friend's index for later
                friendIndex = index;
            }
        })
        // send the bff's info!
        res.send(friends[friendIndex]);

        // add friend to databases!
        friends.push(friend)
    });
}