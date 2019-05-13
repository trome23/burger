var express = require("express");

var burgerModel = require("../models/burger")

var router = express.Router();

router.get("/", function(req, res) {
    burgerModel.getAllBurgers(function(data) {
      var burgerObj={
        burgers: data
      }
      res.render("index", burgerObj)
    })
  });

  router.get("/about", function(req, res) {
    res.send('About Burgers')
  });

module.exports = router;


// [ RowDataPacket { id: 1, burger_name: 'Jalapeno', devoured: 0 },
//   RowDataPacket { id: 2, burger_name: 'Mushroom', devoured: 0 },
//   RowDataPacket { id: 3, burger_name: 'Western', devoured: 0 } ] 