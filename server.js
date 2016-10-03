process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser  = require('body-parser');
var morgan = require('morgan');

//EXPRESS FRAMEWORK
//Configuration
var app = express();
var port = Number(process.env.PORT) || 8888;

//Set view engine to ejs and set path to of ejs
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '\\public\\'));  

//Use body parser so we can get info from POST and/or URL parameters. A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). 
//This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.urlencoded({ extended: false }));
//Returns middleware that only parses json
app.use(bodyParser.json());

//Use morgan to log requests to the console
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

//EXPRESS ROUTES
require('./app/routes/index.server.routes.js')(app);

app.listen(port);

console.log('Server running at http://localhost:' + port +'/');