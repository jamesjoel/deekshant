var express = require('express');
var app = express();
var data = require("./data");

console.log(data.a);

app.listen(3000, function(){
	console.log("Server Running");
});
