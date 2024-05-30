// De-structure :

// destructuring is a process to extract the values of array and object and to re-assign them into a new variables.
// it is a shorthand way to extract the values of array and object.

let myArray = ["muna","lisha","mira","subha"];
// let [name1, name2, name3, name4] = myArray;
// console.log(myArray);
// console.log(name1, name2, name3, name4);
// console.log(name1);
// console.log(name1 = "kukura");
// console.log(myArray[0] = name1);
// console.log(myArray);

//skipping elements :
let [, , name3, name4] = myArray;
console.log(name3,name4);

//rest operator :
// let [name1, name2, ...rest] = myArray;
console.log(name1);
console.log(name2);
console.log(rest);

//destructure of object
let student = {
    name: "muna",
    age: 30,
    city: "bhubaneswar",
    marks: [80,90,78],
    ismarried: false,
    address: {po: "bhutamundai", pin: 754141},
};

//let {name, age, city} = student;
// console.log(name, age, city);

let {name, age, ...rest} = student;
console.log(name, age, rest);
