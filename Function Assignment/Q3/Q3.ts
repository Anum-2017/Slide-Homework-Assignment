/* 
Arrow Function Conversion
Convert the following traditional function into an arrow function:

 function add(a:number, b:number):number{
   return a + b ;
 } */

// convert the traditional function add into an arrow function

const add = (a: number, b: number): number => a + b;

const result = add(5, 3);

console.log(result);
