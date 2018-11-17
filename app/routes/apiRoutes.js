var express = require("express");
var router = express.Router()

//Display array of objects as JSON
router.get("/api/zoos/:zoo_id", function(req, res) {

    var sql = "SELECT * FROM view_animals WHERE zoo_id = " + req.params.zoo_id 
 
    connection.query(sql, function(err, results) {
        if (err) throw err;
  
        res.json(results)
    
    });
    
});

module.exports = router