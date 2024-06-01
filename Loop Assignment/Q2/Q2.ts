/* Q2 - Enumerate Properties with For-In Loop
Given an object representing a car with properties like make, model, and year, write a function that uses a for-in loop to print each property name and its value. */

interface Car {
    make: string;
    model: string;
    year: number;
}

function printCarDetails(car: Car): void {
    for (const property in car) {
        if (car.hasOwnProperty(property)) {
            console.log(`${property}: ${car[property as keyof Car]}`);
        }
    }
}

const myCar: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

printCarDetails(myCar);