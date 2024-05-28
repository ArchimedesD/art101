/*
   lab12.js - This simple JavaScript/jQuery script gets user input and outputs text based on the input's length.

   Requirements: jQuery must be loaded for this script to work.

   Author: Archie Dickson
   Date: 5/23/2024
*/

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else if (mod === 3) {
        return "Hufflepuff";
    }
}

//Credit to chatGPT
document.getElementById('button').addEventListener('click', function() {
    let name = document.getElementById('input').value;
    let house = sortingHat(name);
    let output = document.getElementById('output');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "The Sorting Hat has sorted you into " + house;
    output.appendChild(newParagraph);
});