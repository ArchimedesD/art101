/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Archie Dickson
   Date: 2024
*/

// add button to challenge section


// add a click listener to the challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$("#button-results").click(function(){
    $("#results").toggleClass("special");
});