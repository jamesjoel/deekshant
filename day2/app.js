var express = require('express');
var app = express();
// console.log(app);
app.set("view engine", "ejs");
// app.set("views", "pages");

app.get("/", function(req, res){
	// res.send("<h1>hello world</h1>");
	// console.log(__dirname);
	// res.sendFile(__dirname+"/index.html");
	var a = "rohit";
	var color = ["red", "green", "blue", "yellow"];


	var pageData = { name : a, city : "indore", color : color};




	res.render("index", pageData);
});

app.get("/about", function(req, res){
	res.render("about");
});






app.listen(3000, function(){
	console.log("Server Running");
});

