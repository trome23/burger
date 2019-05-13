var express = require("express");

var burgerModel = require("../models/burger")

var router = express.Router();

router.get("/", function(req, res) {
    burgerModel.getAllBurgers(function(data) {
      console.log(data, "this is the function from appCtrl and the data is the date coming from out db");
      res.end()
    })
  });

  router.get("/about", function(req, res) {
    res.send('About Burgers')
  });

module.exports = router;


// [ RowDataPacket { id: 1, burger_name: 'Jalapeno', devoured: 0 },
//   RowDataPacket { id: 2, burger_name: 'Mushroom', devoured: 0 },
//   RowDataPacket { id: 3, burger_name: 'Western', devoured: 0 } ] 