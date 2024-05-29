"use strict";
/*Recursive Function - Factorial
Write a recursive function to calculate the factorial of a number. The factorial of a number n is the product of all positive integers less than or equal to n. */
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
