//Function - input (argument), code, output (return value)

let greetUser = function (){
    console.log('Welcome user!')
}

greetUser();

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)

let otherValue = square(10)

console.log(value);
console.log(otherValue);

//convert fahrenheit to celcius
//print converted values to console
let tempConverter= function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = tempConverter(32)
let tempTwo = tempConverter(68)


console.log(tempOne);
console.log(tempTwo);





