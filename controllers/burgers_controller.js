var express = require("express");

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res) {
    console.log('the home "/" route is being used');
    res.send('Burgers Home Page')
  });

  router.get("/about", function(req, res) {
    res.send('About Burgers')
  });

module.exports = router;
