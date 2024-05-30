// math

// let num1 = 100;
// let num2 = 20;

// let result = num1 + num2;
// console.log(result);
// console.log(Math.abs(result));
// console.log(Math.abs(-20));

// //console.log(Math.round(5.3));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.1));
// console.log(Math.min(5,2,3,7,90));
// console.log(Math.max(5,20,4,50,60));

//How to generate a random number ?
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));


let min = 10;
let max = 50;
let random =  (Math.floor(Math.random() * (max - min + 1))) + min;

let result = "";
result = result + String(random) ;
console.log(result);
console.log(result.includes("10"));