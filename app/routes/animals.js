const express = require("express");
const router = express.Router()

var connection = require("../config/connection.js");


//all animals belonging to a zoo
router.get("/api/animals/:zoo_id", function(req, res) {

    const sql = "SELECT * FROM animals WHERE id = "+ req.params.zoo_id;

    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });



});


//Display get all animals for an animal
router.get("/api/animals/:animal_id/profile", function(req, res) {

    const sql = "SELECT * FROM animals WHERE id = "+ req.params.animal_id;



    connection.query(sql, function(err, results) {
        if (err) throw err;

        res.json(results)

    });

});


//add an animal
router.post("/api/animals", function(req, res) {
//
// const sql = "INSERT INTO animals\n" +
//     "(animal_name, zoo_id, species_id, mom_id, dad_id, gender, matable, birth_date, image_URL)\n" +
//     "values\n" +
//     "       ('Mrs. Jumbo', 1, 1, 0, 0, 'F', TRUE, '2008-01-01', '');"

});

router.put("/api/animals/:animal_id", function(req, res) {

});




module.exports = router;