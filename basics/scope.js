
// Lexial Scope (Static Scope)
//Global Scope - defined outside of all code blocks
//Local Scope - defined inside a code block

//In a scope, you can accees variables defined in that scope or in any parent ancestor scope.

varOne = 'varOne'
//global variable

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    //local variable
    console.log(varTwo)

    if (true) {
        let varFour='varFour'
        //local variable
    }
}

if (true) {
    let varThree = 'varThree'
    //local variable
}

console.log(varTwo)