var friendData = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/friends', function (req, resp) {
        resp.json(friendData);
    })

    app.post('/api/friends', function (req, resp) {
        try {

            //save req.body as 'newUser'
            var newUser = req.body;
            newUserScore = 0;
            var userDifference = 49;
            var similarUser = {};
            for (let i = 0; i < newUser['scores'].length; i++) {
                newUserScore += newUser['scores'][i];
            }

            //loop over friend data.
            for (var i = 0; i < friendData.length; i++) {
                //add up all the scores from this user.
                var currentUser = friendData[i];
                var currentUserScore = 0;
                for (var j = 0; j < currentUser['scores'].length; j++) {
                    currentUserScore += Math.abs(currentUser['scores'][j] - newUser['scores'][j]);
                }
                if (currentUserScore < userDifference) {
                    userDifference = currentUserScore;
                    similarUser = currentUser;
                }


            }

            resp.json(similarUser);
            friendData.push(req.body);
            //resp.json(newfriend)
            resp.json(true);

            // here is where the logic goes.

        } catch (err) {
            resp.json(false);
        }


    })

}