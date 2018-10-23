//Multiple Arguments
let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

//Default Arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//functin arguments: bill total, tipPercent, 

let diningTip = function (total, tipPercent = .2){
    return total * tipPercent
    
}
let tip = diningTip(80, .25);
console.log(tip)