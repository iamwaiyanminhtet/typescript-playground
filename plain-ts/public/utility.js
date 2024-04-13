"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getInfo = (property) => {
    if (property.name) {
        console.log(`Name : ${property.name}`);
    }
    if (property.username) {
        console.log(`Username : ${property.username}`);
    }
    if (property.age) {
        console.log(`Age : ${property.age}`);
    }
};
const person1 = {
    name: "Aragorn",
    username: "aragorn25",
};
const person2 = {
    name: "Jack Frost",
    age: 18
};
getInfo(person1);
getInfo(person2);
// Required makes all properties required.
const person3 = {
    name: "Alvis Alonzo",
    username: "alvis11",
    age: 30
};
getInfo(person3);
person3.age = 40;
getInfo(person3); // age becomes 40
// Readonly, well readonly
const person4 = {
    name: "Alvis Alonzo",
    username: "alvis11",
    age: 30
};
// person4.age = 40  cant person 4 is just read-only
// Record
// when you know excatly what will be in that object;
const people = {
    1: person1,
    2: person2,
    3: person3,
    4: person4
};
console.log(people);
const user3Info = {
    name: person3.name,
    age: person3.age
};
console.log(user3Info);
const user1sUsername = {
    username: person1.username
};
console.log(user1sUsername);
// ReturnType
// type Book = {
//     title : string,
//     author : string
// }
// const createBook = (title : string, author : string, pages : number) => {
//     return {title, author, pages}
// }
const createBook = (title, author, pages) => {
    return { title, author, pages };
};
const bookArgs = ['How to be an idiot', 'idiot', 100];
const newBook = createBook(...bookArgs);
console.log(newBook);
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulating asynchronous operation
        return { name: "John", age: 30, username: 'johnnn' };
    });
}
// show warning : username is missing
const data = { name: "Alice", age: 25 };
