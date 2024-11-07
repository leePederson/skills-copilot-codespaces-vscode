//create web server
var express = require('express');
var app = express();
var path = require('path');

//set up the server
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('Server started at http://localhost:3000');