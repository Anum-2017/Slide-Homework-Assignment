"use strict";
/* Q2 -Using Default Parameters
Define a function greet that takes 2 parameters: name and greeting, where greeting has a default value of "Hello". The function should return a greeting message.
console.log(greet("Ameen"));  Should print Hello, Ameen!
console.log(greet("Zia", "Hi")); Should print Hi, Zia! */
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Anum"));
console.log(greet("Sana", "Hi"));
