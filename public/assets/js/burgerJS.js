console.log("yo");

$(document).on("click", ".complete", function(event) {
    event.preventDefault();
    console.log("Devour has been clicked on"); 
})

$(document).on("click", ".delete", function(event) {
    event.preventDefault();
    console.log("delete has been clicked on"); 
})

$(document).on("click", "#addBurger", function(event) {
    event.preventDefault();
    console.log("addBurger has been clicked on"); 
})