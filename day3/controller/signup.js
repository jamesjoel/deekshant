var express = require('express');
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017";

// MongoClient.connect(url, function(err, client){
// 	if(err){
// 		console.log("Error in Connection", err);
// 		return;
// 	}
// 	var db = client.db("project"); // SELECT DATABASE
// 	db.collection("student").find().toArray(function(err, result){
// 		if(err){
// 			console.log("Error in Query", err);
// 			return;
// 		}
// 		console.log(result);
// 	});


// });




routes.post("/", function(req, res){
		console.log(req.body);
		var obj = req.body;
		// var obj = {};
		// obj.full_name = req.body.f_name;
	MongoClient.connect(url, function(err, client){
		var db = client.db("node11");
		db.collection('user').insert(obj, function(err, result){
			console.log(result);
			res.send(result);
			// res.redirect("/");
		});
	});
});
module.exports=routes;