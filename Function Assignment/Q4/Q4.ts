/* 
Implementing a rest parameter
Write a function sumAll that uses a rest parameter to take any number of argumentsand returns their sum. 
console.log(sumAll(1, 2, 3)); // Should print: 6 */

function sumAll(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(`The result of the sumAll is: ${sumAll(1, 2, 3)}`);
console.log(`The result of the sumAll is: ${sumAll(2, 4, 6, 8, 10)}`); 
console.log(`The result of the sumAll is: ${sumAll(5, 10, 15, 20)}`); 
console.log(`The result of the sumAll is: ${sumAll(10, 20, 30, 40,50)}`); 
