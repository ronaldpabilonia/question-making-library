var express = require('express');
var path = require("path");
var app = express();

// app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/script'));

app.get('/',function (req ,res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});