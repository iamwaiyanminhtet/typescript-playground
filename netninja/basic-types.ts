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
    fullname : "Aragorn",
    username : "Strider"
}

object = {
    fullname : "Jack Frost",
    username : "jackie"
}

// only can redeclare with exact initialization value
// object = {
//     fullname : "Jack Frost",
//     username : "jackie",
//     isAdmin : false
// }

// explicit types
let fullname : string;
fullname = "Aragorn";

let isAdmin : string|boolean;
isAdmin = 'yes';
isAdmin = true;

let randomNum : number[];
randomNum = [34,4324,5,23412,65];

let mixedArray : (string|number)[];
mixedArray = ["hello", 2214];

let person : {
    fullname : string,
    isAdmin : boolean
}

person = {
    fullname : "Aragorn",
    isAdmin : false
}

// any
let variable : any = "hello";
variable = true;
variable = 5;
variable = ['34']

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