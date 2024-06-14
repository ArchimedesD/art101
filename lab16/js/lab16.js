// lab 15 - AJAX

// Author: Archie Dickson

// Instructor: Wes Modes

// Date: 6/7/2024

URL = "https://xkcd.com/info.0.json";
$('#action').click(function(){
    $.ajax({
        url: URL,
        type: "GET",
    })
    .done(function(data) {
        console.log(data);
        $("#output").html("<p>" + data.value + "</p>");
    });
});