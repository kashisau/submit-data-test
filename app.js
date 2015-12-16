var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// Set up a URL route
app.get("/", function(req, res) {
 res.send("Heroku Demo!");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

app.use(cookieParser());
app.use(bodyParser());

app.use('/csrf-token', require('./routes/csrf-token.js'));
app.use('/submit-data', require('./routes/submit-data.js'));

// Render some console log output
console.log("Listening on port " + port);