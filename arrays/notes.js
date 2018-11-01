const notes = ['Note 1', 'Note 2', 'Note 3']

//pop method removes item from the end of an array
// console.log(notes.pop())

// //push method adds a new note to the end of an array
// notes.push('New Note')

// //shift method removes item from beginning of array
// console.log(notes.shift())

// //unshift method adds item to the beginning of an array
// notes.unshift('Beginning Note')

//splice method removes an item from an array; enter 2 numbers as arguments. the first number represents the starting point in the array, and the next number determines how many to remove
notes.splice(1, 0, 'This is the new second item.')

console.log(notes.length)
//length method prints how many items are in the array
console.log(notes)
