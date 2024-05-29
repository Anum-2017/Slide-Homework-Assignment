"use strict";
/* Anonymous Function and Callbacks
Create an anonymous function that takes an array of numbers and a callback function.The anonymous function
should apply the callback function to each element of the array & return a new array with the results. */
const anonymousFunction = (arr, callback) => {
    return arr.map(callback);
};
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = anonymousFunction(numbers, (x) => x * 2);
console.log(doubledNumbers);
