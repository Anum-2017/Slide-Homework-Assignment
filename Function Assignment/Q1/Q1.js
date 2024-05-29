"use strict";
/*
Basic function creation
Create a function named calculateProduct that takes 2 parameters, multiplies them together, and returns the result.
const result = calculateProduct(5,10);
console.log(result); // should print 50 */
function calculateProduct(num1, num2) {
    return num1 * num2;
}
const num1 = 5;
const num2 = 10;
const result = calculateProduct(num1, num2);
console.log(`The result of ${num1} multiplied by ${num2} is: ${result}`);
