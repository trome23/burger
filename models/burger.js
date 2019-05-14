var orm = require("../config/orm");
// console.log(orm);

module.exports = {
  getAllBurgers: function(cb) {
    orm.selectAll('burgers', cb)
  },
  postBurger: function(fEData, cb){
    orm.insertInto('burgers', 'burger_name', fEData, cb)
  },
  putBurger: function(id, cb){
    orm.updateRow("burgers", id, cb)
  },
  deleteBurger: function(id, cb){
    orm.deleteRow("burgers", id, cb)
  }
}

  