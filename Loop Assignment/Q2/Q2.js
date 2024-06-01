"use strict";
/* Q2 - Enumerate Properties with For-In Loop
Given an object representing a car with properties like make, model, and year, write a function that uses a for-in loop to print each property name and its value. */
function printCarDetails(car) {
    for (const property in car) {
        if (car.hasOwnProperty(property)) {
            console.log(`${property}: ${car[property]}`);
        }
    }
}
const myCar = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
printCarDetails(myCar);
