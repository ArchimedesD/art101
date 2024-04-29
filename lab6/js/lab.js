// Lab 6 - Arrays and Objects
// Author: Archie Dickson
// Date: 4/28/2024

// Define Variables

myTransport = ['walk', 'bus', 'bike', 'drive', 'run', 'carpool', 'piggyback'];

// Create an Object for myMainRide

myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "silver",
  year: 2015,
  age: function() {
      return 2024 - this.year;
  }
}

//output

document.writeln("Kinds of transportation I use: " , myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
