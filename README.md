# Best Food Friend
**Technologies Used:** Heroku, Node.js, Express.js, Bootstrap, jQuery, Javascript, Git, GitHub, VSCode

## Summary
A simple display of using Express to set up a server for get/put/post. After completing the survey, it will post to the server, find the best match and display that user in a modal. Who's your Best Food Friend?

## Highlights:
- Deployed to Heroku
- Node.js
- Express.js

## Installation Guide
- Clone this Repository to your computer
- Run npm install inside this folder's directory to install the dependencies
- Then simply run the applications in terminal/console: `node server.js`
- Then open https://localhost:3377 on your browser

## Dependencies
- express
- body-parser
- path

## Goals
- Learn more about REST and APIs

## Learning Experience
- Learned to set up local hosting with Express
- Learned to deploy to Heroku
- Learned to read/write data from/into another .js file

## Screenshots
![Best Food Friend](readme.PNG)
## Code Snippets
Routing paths files from a different file from server.js

```
// htmlRoutes.js
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile("public/home.html", { root: "app/" })
    });

    app.get("/survey", function (req, res) {
        res.sendFile("public/survey.html", { root: "app/" })
    });
}
```
getting the route paths from other files
```
// server.js
require(path.join(__dirname, "/app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "/app/routing/apiRoutes.js"))(app);
```
handling posts in apiRoutes.js
```
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
```
## Links
LinkedIn: https://www.linkedin.com/in/kerwinhy/<br>
GitHub: https://github.com/seiretsym<br>

## Deployed Site:
Heroku: https://fierce-inlet-38507.herokuapp.com