var express = require('express');
var router = express.Router()
var connection = require("../config/connection.js");

//Display array of objects as JSON
//This route load the animals by zoo for the index.handlebars page
//for the animal-block to use
router.get("/api/animals/:zoo_id", function(req, res) {

    var sql = "SELECT * FROM view_animals WHERE zoo_id = " + req.params.zoo_id 
 
    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


router.get("/api/zoos", function(req, res) {

    var sql = "SELECT * FROM zoos"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


router.get("/api/species", function(req, res) {

    var sql = "SELECT * FROM species"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


router.get("/api/animals", function(req, res) {

    var sql = "SELECT * FROM animals"

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


module.exports = router