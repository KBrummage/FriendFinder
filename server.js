var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Set the port.  If there isn't an enviornmental port, default to 8080.
var PORT = process.env.PORT || 8080;

//middleware to serve static content for the app from the "public" directory.
app.use(express.static('public'))

//sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//points server to a series of route files.  They give server a "map" of how to respond when users visit or request data from various urls

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app)

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})