"use strict";
//Q1 - Basic Array Operations
// Create an array called fruits that contains the names of four different fruits
let fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
// Add a new fruit to the end of the array
fruits.push('Mango');
console.log('After adding a new fruit to the end:', fruits);
// Remove the first fruit from the array
fruits.shift();
console.log('After removing the first fruit:', fruits);
// Add a new fruit to the beginning of the array
fruits.unshift('PineApple');
console.log('After adding a new fruit to the beginning:', fruits);
// Find the index of a fruit (let's say 'Cherry') and remove that fruit using the index
let index = fruits.indexOf('Cherry');
if (index !== -1) {
    fruits.splice(index, 1);
}
console.log('After finding and removing a specific fruit:', fruits);
