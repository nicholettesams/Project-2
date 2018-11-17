const express = require('express');
const path = require('path');

const router = express.Router();
var connection = require("../config/connection.js");


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

router.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/add_animal.html"));
});


router.get("/zoo", function(req, res) {

    var hbsObject = {
    zoo_name: "test"
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

});

module.exports = router;