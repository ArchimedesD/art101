// sortUserName - a function that sorts user input
// Author - Archie Dickson
// Date - 5/2/2024

function sortUserName() {
    let userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // split string to array
    let nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    let nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ",
sortUserName(), "</br>");