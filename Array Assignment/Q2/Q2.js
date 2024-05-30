"use strict";
// Define a 3x3 matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Function to print the diagonal elements of the matrix
function printDiagonalElements(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
// Function to calculate the sum of all elements in the matrix
function calculateSumOfElements(matrix) {
    let sum = 0;
    for (let row of matrix) {
        for (let element of row) {
            sum += element;
        }
    }
    return sum;
}
// Calling the functions
console.log("Diagonal elements of the matrix:");
printDiagonalElements(matrix);
let sum = calculateSumOfElements(matrix);
console.log("Sum of all elements in the matrix:", sum);
