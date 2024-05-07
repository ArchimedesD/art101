// myFunctions - 
// Author - Archie Dickson
// Date - 5/6/2024

// let numbers = [5, 10, 15, 20, 25]
// console.log("My array: ", numbers);

// function myFunction(x){
//     var results = x * 2
//     return results;
// }

// numbers.map(myFunction);

// numbers.map(function(x){
//     let results = x + 5;
//     return results;
// });

// mapresults = numbers.map(myFunction);

// console.log("Results: ", mapresults);

let numbers = [5, 10, 15, 20, 25];
console.log("My array: ", numbers);

function myFunction(x){
    var results = x * 2;
    return results;
}

let mappedNumbers = numbers.map(myFunction);
console.log("Mapped numbers: ", mappedNumbers);

let mapresults = numbers.map(function(x){
    let results = x + 5;
    return results;
});

console.log("Results: ", mapresults);