const express = require('express');
const path = require('path');

const router = express.Router();
var connection = require("../config/connection.js");


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

module.exports = router;