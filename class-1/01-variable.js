//declare a variable

let num = 100;
console.log(num); //to print the output

let Num = 50;
console.log(Num);

//space does not allow while declaring variable
//let second num =1000;(Example)

let second_num = 5000; //second_num is known as (snake case)
console.log(second_num);

let secondNum = 300;
console.log(secondNum); //secondNum is known as (camel case)

let float_num = 15.05;
console.log(float_num);

console.log(typeof float_num);

//string:

//String is a collection of charcters.
//String should be in "..."

let name = "muna";
console.log("My name is:", name);// muna

console.log(typeof name);

//using backtick `` :
console.log(`My name is ${name}`)

let numbers = "1000"; //let,var,const(keyword), =(assign operator), "1000"(value);
let strings = 1000;

console.log(typeof numbers); //mom
console.log(typeof strings); //number

//BigInt:

//BigInt is a new datatype in javascript that can represent integers of any size.It is used to store integers that are too large or too smnall.

let bigInt = 1000000000000000;
console.log(bigInt);

//Null :

let result = null; //null : void /empty;
console.log(typeof result); //null

//undefined :

let value; //nothing is assigned.
console.log(value); // undefined.
console.log(typeof value); //undefined

//Boolean :

let ismarried = false;
console.log(typeof ismarried);
console.log(!ismarried);

//Symbol :

//Symbol is a data types in js to produce unique key values and it's introduced in ES6.
//It is used to create unique identifiers for objects.

let symbol1 = Symbol("abc"); //different value
let symbol2 = Symbol("def"); //different value
console.log(symbol1 === symbol2); //false

console.log(symbol1.description);
console.log(symbol2.description);

//NaN :
//NaN is a data types in js that represents a non-numeric value. It is used to represent values that are not numbers.
let num_value1 = 100;
let num_value2 ="150";
console.log(num_value1 + num_value2); // 100150

let output = 0/0;
console.log(output); //NaN (not a number)