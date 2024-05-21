/*
   lab11.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Archie Dickson
   Date: 5/20/2024
*/

// Credit: ChatGPT
// function sortString(inputString) {
//     let new_word = [];
//     let input_size = inputString.length;
    
//     for (let i = 0; i < input_size; i++) {
//         let rand_int = Math.floor(Math.random() * input_size); // Correct calculation for a random index
//         new_word.push(inputString[rand_int]);
//     }

//     return new_word.join('');
// }
function sortString(inputString) {
    // Convert the input string to an array of characters
    let charsArray = inputString.split('');
    
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = charsArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        let randIndex = Math.floor(Math.random() * (i + 1));
        
        // Swap the current element with the element at the random index
        [charsArray[i], charsArray[randIndex]] = [charsArray[randIndex], charsArray[i]];
    }
    
    // Join the shuffled array back into a string
    return charsArray.join('');
}

// click listener for button

$("#submit").click(function(){

// get value of input field

const userName = $("#user-name").val();

// now sort it

userNameSorted = sortString(userName);

// append a new div to our output div

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
