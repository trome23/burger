console.log("yo");

$(document).on("click", ".complete", function(event) {
    event.preventDefault();
    console.log("Devour has been clicked on"); 
    var id = $(this).attr('data-id')
    console.log(id);
    
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT",
        data: {
            burger_name: $("#burger_name").val().trim()
        }
    }).then(function(serverResponse){
        console.log(serverResponse); 
        location.reload();
    })
})

$(document).on("click", ".delete", function(event) {
    event.preventDefault();
    console.log("delete has been clicked on"); 
    var id = $(this).attr('data-id')
    console.log(id);
    
    $.ajax({
        url: "/api/burger/" + id,
        method: "DELETE",
        data: {
            burger_name: $("#burger_name").val().trim()
        }
    }).then(function(serverResponse){
        console.log(serverResponse); 
        location.reload();
    })
})

$(document).on("click", "#addBurger", function(event) {
    event.preventDefault();
    console.log("addBurger has been clicked on"); 
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: {
            burger_name: $("#burger_name").val().trim()
        }
    }).then(function(serverResponse){
        console.log(serverResponse, 'This is the respone from the server');
        location.reload();
    })
})