export class Book {
    // name : string
    // author : string
    // readonly pages  :number
    // constructor(name:string, author : string, pages : number) {
    //     this.name = name;
    //     this.author = author;
    //     this.pages = pages;
    // }
    // if we have access modifiers, we can just declare the properties immediately
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
    intro() {
        return `${this.name} is written by ${this.author}. ${this.pages} pages`;
    }
}
