var express = require('express');
var routes = express.Router();

routes.post("/", function(req, res){
	console.log(req.body);
});
module.exports=routes;