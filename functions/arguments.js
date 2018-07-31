//Multiple Arguments

let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default Arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + 'Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

// Marie's Challenge

// let getTip = function(total, tipPercent = .2){
//     return total * tipPercent
// }

// let tip = getTip(100)
// console.log(tip)

//challenge area
//Create a template string that calculates and prints:
// "A 25% tip on $40 would be $10."
let getTip = function(total, tipCalculation = .2){
    let tipPercent = tipCalculation * 100
    let tipAmount = total * tipCalculation
return `A ${tipPercent}% tip on a $${total} bill would be $${tipAmount}.` 
    
    
}

let tip = getTip(60)
console.log(tip)
