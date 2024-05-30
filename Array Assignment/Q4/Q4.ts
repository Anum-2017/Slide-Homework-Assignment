// 4 - Using Array Methods

// Define an array of numbers
const numbers: number[] = [3, 8, 12, 17, 25, 36, 49, 64];

// 1. Create a new array with the squares of each number
const squares: number[] = numbers.map(num => num * num);
console.log("Squared Numbers:", squares);

// 2. Filter out all numbers greater than 50
const filteredNumbers: number[] = squares.filter(num => num <= 50);
console.log("Filtered Numbers (<= 50):", filteredNumbers);

// 3. Use the reduce method to find the sum of all numbers in the filtered array
const sumOfFilteredNumbers: number = filteredNumbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Filtered Numbers:", sumOfFilteredNumbers);

