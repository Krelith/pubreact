var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(4200, function(req, res){
  console.log("Server running on Port 4200...");
})
