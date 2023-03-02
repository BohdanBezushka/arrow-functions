/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    // Code Block
    return a + b;
}

let sum = addTwoNumbers(12, 7);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    // Code Block
    return a + b;
}

let sum1 = addTwoNumbers1(2, 7);
console.log(sum1);


// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(12, 2);
console.log(sum2);


// Implicit Returns

// Returning Multiple Lines
