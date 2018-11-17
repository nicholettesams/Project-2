var express = require("express");
var router = express.Router()
var connection = require("../config/connection.js");


//Display array of objects as JSON
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

module.exports = router