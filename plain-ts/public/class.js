import { Book } from "./classes/baseClass.js";
const books = [];
let book1, book2;
book1 = new Book('book1', 'author1', 100);
book2 = new Book('book2', 'author2', 200);
books.push(book1);
books.push(book2);
console.log(books);
