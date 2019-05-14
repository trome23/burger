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

  router.post("/api/burger", function(req, res) {
    console.log(req.body);
    var fEData = req.body;
    burgerModel.postBurger(fEData, function(data){
      console.log(data);
      res.send()
    })
  });

  router.put("/api/burger/:id", function(req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    burgerModel.putBurger(id, function(data){
      console.log(data, "row updated");
      
      res.send('update happended on ' + id)
    })
  });

  router.delete("/api/burger/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    burgerModel.deleteBurger(id, function(data){
      console.log(data);
      res.send("row deleted")
    });
  });

module.exports = router;


// [ RowDataPacket { id: 1, burger_name: 'Jalapeno', devoured: 0 },
//   RowDataPacket { id: 2, burger_name: 'Mushroom', devoured: 0 },
//   RowDataPacket { id: 3, burger_name: 'Western', devoured: 0 } ] 