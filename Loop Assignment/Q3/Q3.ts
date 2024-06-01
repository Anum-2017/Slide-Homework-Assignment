/* Q3 - Basic For Loop Exercise
Write a function that uses a for loop to print the
numbers from 1 to 100. However, for numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz”. For numbers divisible by both 3 and 5, print "FizzBuzz”.
 */

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Call the function to see the output
fizzBuzz();
