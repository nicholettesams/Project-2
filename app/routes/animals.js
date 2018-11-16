const express = require("express");
const router = express.Router()

var connection = require("../config/connection.js");


//all animals belonging to a zoo
router.get("/api/animals/:zoo_id", function(req, res) {

    const sql = "SELECT * FROM zoos WHERE id = "+ req.params.zoo_id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });



});


// //Display get all animals for an animal
// router.get("/api/animals/:animal_id/profile", function(req, res) {
//
//
//     connection.query(sql, function(err, results) {
//         if (err) throw err;
//
//         res.json(results)
//
//     });
//
// });
//
// //add an animal
// router.post("/api/animals/:animal_id", function(req, res) {
//
//
//
// });
//
// router.put("/api/animals/:animal_id", function(req, res) {
//
// });




module.exports = router;