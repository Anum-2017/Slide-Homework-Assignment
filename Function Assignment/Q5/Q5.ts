
/* Function Returning Another Function
Create a function multiplier that takes a number as its argument and returns another function. The returned function should take a single number as its argument and return the product of its argument and the argument of the first function. */

function multiplier(factor: number): (num: number) => number {
    return function(num: number): number {
        return factor * num;
    };
}

const triple = multiplier(5);
console.log(triple(3)); 
console.log(triple(7)); 
