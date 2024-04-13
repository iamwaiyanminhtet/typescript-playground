// Partial makes all properties optional
interface Person {
    name : string,
    username : string,
    age : number
}

const getInfo = (property : Partial<Person>) : void => {
    if(property.name) {
        console.log(`Name : ${property.name}`)
    }
    if(property.username) {
        console.log(`Username : ${property.username}`)
    }
    if(property.age) {
        console.log(`Age : ${property.age}`)
    }
}

const person1 : Partial<Person> = {
    name : "Aragorn",
    username : "aragorn25",
}

const person2 : Partial<Person> = {
    name : "Jack Frost",
    age : 18
}

getInfo(person1)
getInfo(person2)

// Required makes all properties required.
const person3 : Required<Person> = {
    name : "Alvis Alonzo",
    username : "alvis11",
    age : 30
}

getInfo(person3)
person3.age = 40
getInfo(person3) // age becomes 40

// Readonly, well readonly
const person4 : Readonly<Person> = {
    name : "Alvis Alonzo",
    username : "alvis11",
    age : 30
}
// person4.age = 40  cant person 4 is just read-only

// Record
// when you know excatly what will be in that object;
const people : Record<number, (Person | Partial<Person>)> = {
    1 : person1,
    2 : person2,
    3 : person3,
    4 : person4
}
console.log(people)

// Pick and Omit
type userInfo = Pick<Person, 'name' | 'age'>
const user3Info:userInfo = {
    name : person3.name,
    age : person3.age
} 
console.log(user3Info)

type username = Omit<Person, 'name' | 'age'>
const user1sUsername : username = {
    username : person1.username!
} 
console.log(user1sUsername)

// Exclude and Extract
type animals = "snake" | "turtle" | "fish" | "elephant"
type coldBloodedAnimals = Exclude<animals, "elephant">
type warmBloodedAnimals = Extract<animals, "elephant">

// Nonnullable
type types = string | number | boolean | object | null | undefined
type nonNullableTypes = NonNullable<types>

// ReturnType
// type Book = {
//     title : string,
//     author : string
// }
// const createBook = (title : string, author : string, pages : number) => {
//     return {title, author, pages}
// }

const createBook = (title : string, author : string, pages : number) => {
    return {title, author, pages}
}
type Book = ReturnType<typeof createBook>

// Parameter
type bookParams = Parameters<typeof createBook>
const bookArgs : bookParams = ['How to be an idiot', 'idiot', 100]

const newBook = createBook(...bookArgs)
console.log(newBook)

// Awaited
type userInformation = { name: string; age: number, username : string }
async function fetchData(): Promise<userInformation> {
    // Simulating asynchronous operation
    return { name: "John", age: 30, username : 'johnnn' };
}

type Data = Awaited<ReturnType<typeof fetchData>>;

// show warning : username is missing
const data: Data = { name: "Alice", age: 25 };
