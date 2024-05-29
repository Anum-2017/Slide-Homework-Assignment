"use strict";
/*nested Funtions -Scoping
Write a function that contains two nested functions. The outer function should accept a parameter x,
and its nested function should increment and then triple x. The outer function should return the result of the tripled value after incrementing. */
function outerFunction(x) {
    function innerFunction(y) {
        return (y + 1) * 3;
    }
    return innerFunction(x);
}
// Example usage
const result = outerFunction(5);
console.log(result);
