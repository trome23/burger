var express = require("express");
var exphbs= require("express-handlebars")

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require("../burger/controllers/burgers_controller")

app.use(routes)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

// burgers{
//     id: 1,
//     burger_name: 'string',
//     devoured: true
// }




