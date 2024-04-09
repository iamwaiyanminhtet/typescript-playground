"use strict";
let username = "Strider";
// username = 10
// cant change the type
let array = ['hello', 'hey', 'hi'];
// array.push(12) 
// cant push the number type as its initialization was array with the string
// mix types array
let mixArray = [1, 'hello', 2, 'hey', 3, 'hi'];
mixArray.push(10);
mixArray.push('yo');
let object = {
    fullname: "Aragorn",
    username: "Strider"
};
object = {
    fullname: "Jack Frost",
    username: "jackie"
};
// only can redeclare with exact initialization value
// object = {
//     fullname : "Jack Frost",
//     username : "jackie",
//     isAdmin : false
// }
// explicit types
let fullname;
fullname = "Aragorn";
let isAdmin;
isAdmin = 'yes';
isAdmin = true;
let randomNum;
randomNum = [34, 4324, 5, 23412, 65];
let mixedArray;
mixedArray = ["hello", 2214];
let person;
person = {
    fullname: "Aragorn",
    isAdmin: false
};
// any
let variable = "hello";
variable = true;
variable = 5;
variable = ['34'];
let addNums = (a, b, optional, defaultParam = 10) => {
    // optional is undefined when the argument is not provided
    // console.log(optional) 
    // console.log(defaultParam)
    return a + b;
};
addNums(5, 5, 10, '10');
// function signature
// kinda base structure of specific function
let calcNums;
calcNums = (num1, num2) => {
    return num1 + num2;
};
