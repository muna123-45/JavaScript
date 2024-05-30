//Dates

let myDate = new Date();
console.log(myDate);//2024-05-23T01:34:04.612Z
console.log(myDate.toDateString());//Thu May 23 2024
console.log(myDate.toLocaleString());//5/23/2024, 7:11:14 AM
console.log(myDate.toLocaleDateString());//5/23/2024
console.log(myDate.toTimeString());//07:11:14 GMT+0530 (India Standard Time)

let MyStamp = Date.now();
console.log(MyStamp);

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());