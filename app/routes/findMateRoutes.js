var express = require("express");
var router = express.Router();
var connection = require("../config/connection.js");


//Display array of objects as JSON
router.get("/api/mates/:animal_id", function(req, res) {

    console.log("MATES REQ.QUERY: ", req.query);

    console.log("MATES REQ.PARAMS: ", req.params);


    var sql = "SELECT a.id, a.animal_name, a.gender, a.matable, a.birth_date, YEAR(now()) - YEAR(a.birth_date) - ( DAYOFYEAR(now()) < DAYOFYEAR(a.birth_date) ) as age , a.image_url "
    sql = sql + ", z.zoo_name, s.species_name, IFNULL(a2.animal_name, '') as mom_name, IFNULL(a3.animal_name, '') as dad_name "
    sql = sql + "FROM animals as a "
    sql = sql + "INNER JOIN zoos as z ON z.id = a.zoo_id "
    sql = sql + "INNER JOIN species as s ON a.species_id = s.id "
    sql = sql + "LEFT JOIN animals as a2 ON a.mom_id = a2.id "
    sql = sql + "LEFT JOIN animals as a3 ON a.dad_id = a3.id "
    sql = sql + "WHERE YEAR(now()) - YEAR(a.birth_date) - ( DAYOFYEAR(now()) < DAYOFYEAR(a.birth_date) ) >= s.mating_age_min "
    sql = sql + "AND YEAR(now()) - YEAR(a.birth_date) - ( DAYOFYEAR(now()) < DAYOFYEAR(a.birth_date) ) <= s.mating_age_max "
    sql = sql + "AND a.matable = 1 "
    sql = sql + "AND a.species_id = (SELECT species_id from animals where id = " + req.query.animal_id + ") "
    sql = sql + "AND a.zoo_id <> (SELECT zoo_id from animals where id = " + req.query.animal_id + ") "
    sql = sql + "AND a.gender <> (SELECT gender from animals where id = " + req.query.animal_id + ") "

    connection.query(sql, function(err, data) {
        if (err) throw err;

        res.render("animal", {animal:data, mate_name: req.query.mate_name, mate_button: false});

        console.log({animal:data, mate_name: req.query.mate_name, mate_button: false});


    });
});

//TODO: call this from the animal-block on the animals.handlebars page to update matable
//This can be left undone if necessary.
router.put("/api/mates/:animal_id", function(req, res) {
    var matable = false; 

    sql = "UPDATE animals SET matable = " + matable
    sql = sql + " WHERE id = " + req.params.animal_id;

    connection.query(sql, function(err, results) {
        if (err) throw err;
  
        res.json(results)
    
    });
});



module.exports = router;