//server.js is the "gatekeeper from Thor."  It allows express to see html files from line 26, and allows those files to have access to routes required in lines 40 & 41.


//bring in express and body-parser.  Express is a node.js framework.
var express = require('express');
var bodyParser = require('body-parser');
var 
//instantiates an application by calling it's app() method.
var app = express();

//possible methods:
//read
// app.get('/',(req,res)=>{/**/})
//create
// app.post('/',(req,res)=>{/**/})
//update
// app.put('/',(req,res)=>{/**/})
//delete
// app.delete('/',(req,res)=>{/**/})
// app.patch('/',(req,res)=>{/**/})

//Set the port.  If there isn't an enviornmental port, default to 8080.
var PORT = process.env.PORT || 8080;

//middleware to serve static content for the app from the "public" directory.
app.use(express.static('public'))

//sets up the Express app to handle data parsing
//this allows us to send JSON from html files to 'backend server stuff, like apiRoutes.js'
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