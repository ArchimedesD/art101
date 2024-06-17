// lab 15 - AJAX

// Author: Archie Dickson

// Instructor: Wes Modes

// Date: 6/7/2024

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: { 
            // No data is required by the xkcd API for this request
            // You can remove this section or leave it empty
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // Extract the comic URL and title from the data
        var imgUrl = data.img;
        var title = data.title;

        // Display the comic in an image element
        $('#comic').attr('src', imgUrl);
        $('#comic-title').text(title);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // Log the error to the console
        console.log("Error:", textStatus, errorThrown);

        // Display an error message on the webpage
        $('#error-message').text("Failed to load comic. Please try again.");
    }
});
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

$(document).ready(function() {
    $('#load-comic').click(function() {
        // Your AJAX call goes here
    });
});