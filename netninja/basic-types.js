var username = "Strider";
// username = 10
// cant change the type
var array = ['hello', 'hey', 'hi'];
// array.push(12) 
// cant push the number type as its initialization was array with the string
// mix types array
var mixArray = [1, 'hello', 2, 'hey', 3, 'hi'];
mixArray.push(10);
mixArray.push('yo');
var object = {
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
var fullname;
fullname = "Aragorn";
var isAdmin;
isAdmin = 'yes';
isAdmin = true;
var randomNum;
randomNum = [34, 4324, 5, 23412, 65];
var mixedArray;
mixedArray = ["hello", 2214];
var person;
person = {
    fullname: "Aragorn",
    isAdmin: false
};
// any
var variable = "hello";
variable = true;
variable = 5;
variable = ['34'];
console.log(username);
console.log(array);
console.log(mixArray);
console.log(object);
console.log(fullname);
console.log(isAdmin);
console.log(randomNum);
console.log(mixedArray);
console.log(person);
console.log(variable);
