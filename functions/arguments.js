//Multiple Arguments
let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

//Default Arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ${name} - Score: ${score}'
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function (total, tipPercent = .2){
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}.`
}
let tip = getTip(60);
console.log(tip);


//functin arguments: bill total, tipPercent, 

// let diningTip = function (total, tipPercent = .2){
//     return total * tipPercent
// }

// let tip = diningTip(80, .25)
// console.log(tip)

// let name = 'Jen'
// let age = 22

// console.log('Hey, my name is ${name}  and I am ${age} years old!')