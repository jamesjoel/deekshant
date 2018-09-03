var express = require('express');
var routes = express.Router();


routes.get("/", function(req, res){
	var pageData = { name : "rohit", city : "indore"};
	res.render("index", pageData);
});

routes.get("/about", function(req, res){
	res.render("about");
});

module.exports=routes;