import { Book } from "./classes/baseClass.js";
const books = [];
const book1 = new Book('book1', 'author1', 100);
const book2 = new Book('book2', 'author2', 200);
books.push(book1);
books.push(book2);
console.log(books);
