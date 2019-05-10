var express = require("express");

var burgerModel = require("../models/burger")

var router = express.Router();

router.get("/", function(req, res) {
    burgerModel.getAllBurgers()
  res.end()
  });

  router.get("/about", function(req, res) {
    res.send('About Burgers')
  });

module.exports = router;
