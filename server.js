var express = require("express");
var exphbs= require("express-handlebars")

var PORT = process.env.PORT || 3000;

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    console.log('our server is up and running on port: ' + PORT);;
})

// burgers{
//     id: 1,
//     burger_name: 'string',
//     devoured: true
// }

// app.use(express.static("public"));


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());