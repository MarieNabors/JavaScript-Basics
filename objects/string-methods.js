//All about string methods
//length is a property of strings
let name = 'Marie Nabors'
//length property
console.log(name.length)
//convert lowercase to uppercase
console.log(name.toUpperCase())

//convert to lowercae
console.log(name.toLowerCase())

//includes method
let password = 'abc123phello098'
console.log(password.includes('password'))

//trim method allows us to remove extra whitespace from a string, returns a new string without white space

console.log(name.trim())

//create a function to check if password is valid, not containing the word 'password' and at least 9 characters long

let isValidPassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true
    }
    else{
        return false
    }
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^'))
console.log(isValidPassword('asdfpasdfpoijpassword'))