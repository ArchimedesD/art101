/*
   lab9.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page using buttons

   Requirements: jQuery must be loaded for this script to work.

   Author: Archie Dickson
   Date: 2024
*/

// add button to challenge section
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

// add button to results section
$("#button-results").click(function(){
    $("#results").toggleClass("special");
});