// include required libs
require("dotenv").config();
var path = require("path");
var parser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

// configure, initialize server
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// link server routing data
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// start server
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});
