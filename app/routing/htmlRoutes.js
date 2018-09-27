var path = require('path')


module.exports = function(app){
    app.get('/', function(req, resp){
        resp.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get('/survey', function(req, resp){
        resp.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    // app.post('/api/friends', function(req, resp){
    //     try{
    //         friendData.push(req.body);
    //         resp.json(true);
    //     }
    //     catch(err){
    //         resp.json(false);
    //     }
        

    // })

}