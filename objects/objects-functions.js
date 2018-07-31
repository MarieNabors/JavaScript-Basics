let myBook = {
    title: 'Celebration of Discipline',
    author: 'Richard Foster',
    pageCount: 286
}
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary  = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
// Create a function that takes in Fahrenheit as an argument and returns an object with 
// 3 properties: fahrenheit, celsius, and kelvin
// Print to console

let tempConverter = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}
let result = tempConverter(100)
console.log(result)