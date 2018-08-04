var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

//Static content for the app 
app.use(express.static(_dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars
app.use(methodOverride("_method"))
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);



