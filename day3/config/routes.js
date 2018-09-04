var express = require('express');
var routes = express.Router();

routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));
routes.use("/contact", require("../controller/contact"));
routes.use("/help", require("../controller/help"));
routes.use("/signup", require("../controller/signup"));


module.exports=routes;