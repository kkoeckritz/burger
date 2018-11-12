var app = require("express");
var burger = require("../models/burger");

var router = app.Router();

// ROOT: render index.handlebars
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("../views/index.handlebars", hbsObject);
	});
});

// GET: retrieve all burgers from DB
router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    });
});

// POST: create new burger
router.post("/api/add", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.json(data);
    });
});

// PUT: "devour" burger
router.put("/api/burger/:id", function(req, res) {    
    burger.updateOne(req.params.id, function(data) {
        res.json(data);
    });
});

module.exports = router;