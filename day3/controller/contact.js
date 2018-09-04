var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Contact Page", pagename : "contact"};
	res.render("layout", pageData);
});
// routes.use("/help", function(req, res){
// 	res.render("contact");
// });
// routes.use("/help/user", function(req, res){
// 	res.render("contact");
// });

module.exports=routes;