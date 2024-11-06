import add, { data } from "./MyLib.js";

console.log("Hello World");

// console.log(add(10,20));
// console.log(add(10,20,30));
// console.log(add(10,20,30,40));
console.log(add(10,20,30,40,50));
console.log(data);
let {multiply}=data;
console.log(multiply(10,20,30));
console.log(data.age);

