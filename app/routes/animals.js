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
        if (err){
            throw err;}

        res.json(results)

    });

});


//add an animal
router.post("/api/animals/add", function(req, res) {
    const animal = req.body;
    console.log(req.body);
    console.log(animal);
    console.log(animal.animal_name);


const sql = "INSERT INTO `animals` (animal_name, zoo_id, species_id, mom_id, dad_id, gender, matable, birth_date, image_URL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"


    connection.query(sql, [animal.animal_name.toString(), animal.zoo_id, animal.species_id,
        animal.mom_id, animal.dad_id, animal.gender.toString(), animal.mateable,
        animal.birth_date, animal.image_URL.toString()],  function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });

    res.send(animal);

});

router.put("/api/animals/:animal_id", function(req, res) {

});




module.exports = router;