let num1 = 100;
let num2 = 200;
console.log("Num1", num1); //traditional way
console.log("Num2", num2);
console.log(typeof num1);
//using backticks
console.log(`Num1: ${num1} and Num2: ${num2}`);

//number to string conversion :

let conversion_num1 = String(num1);
console.log(typeof conversion_num1); //string

//String to number conversion :

let conversion_num2 = Number(num1); // or Number(conversion_num1)
console.log(typeof conversion_num2); //number

let con_num1 = "100";
let con_num2 = "200";

console.log(typeof con_num1);//string
console.log(typeof con_num2);//string

//without using constructor function we can convert
console.log(typeof +con_num1);
console.log(typeof +con_num2);