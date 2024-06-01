"use strict";
/* Q5 - While Loop for a Countdown
Write a function that takes a number as an argument
and counts down to zero using a while loop, printing each number to the console. */
function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
// Test the function
countdown(5);
