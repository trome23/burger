var orm = require("../config/orm");
// console.log(orm);

module.exports = {
  getAllBurgers: function(cb) {
    orm.selectAll('burgers', cb)
  }
}

// var burger = {
//     all: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(name, cb) {
//       orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], function(res) {
//         cb(res);
//       });
//     },
//     update: function(id, cb) {
//         var condition = "id=" + id;
//         orm.updateOne("burgers", {devoured: true}, condition, function(res) {
//             cb(res);
//         });
//     }
//   };
  
//   // Export the database functions for the controller (catsController.js).
//   module.exports = burger;
  