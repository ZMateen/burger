var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//Create routes and set up logic within the routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Export routes for server.js
module.exports = router;