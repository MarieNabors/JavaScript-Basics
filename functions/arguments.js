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

let getTip = function(total, tipPercent = .2){
    return total * tipPercent
}

let tip = getTip(100)
console.log(tip)
