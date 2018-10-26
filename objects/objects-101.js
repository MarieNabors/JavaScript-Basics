let myBook = {
    title: 'Celebration of Discipline',
    author: 'Richard Foster',
    pageCount: 286
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Prayer'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area
//Create an object for a person with properties including name, age, location
//print example: "Marie is 37 and lives in Orlando."
//next increase age by 1 and reprint message

let person = {
    name: 'Marie',
    age: 37,
    location: 'Orlando, Florida'
}
console.log(`${person.name} is ${person.age} years old, and she lives in ${person.location}.`)

person.age = person.age +1

console.log(`${person.name} is ${person.age} years old, and she lives in ${person.location}.`)