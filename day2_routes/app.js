var express = require('express');
var app = express();
app.set("view engine", "ejs");

app.use(require("./routes"));



app.listen(3000, function(){
	console.log("Server Running");
});

