let gradeCalc = function(pointsEarned, pointsPossible){
    let grade = pointsEarned / pointsPossible
    let percentGrade = grade * 100
    let letterGrade = ''
    
        if (percentGrade >= 90) {
            letterGrade = 'A'
        }
        else if(percentGrade >= 80) {
            letterGrade = 'B'
        }
        else if(percentGrade >= 70) {
            letterGrade = 'C'
        }
        else if(percentGrade >= 60) {
            letterGrade = 'D'
        }
        else if(percentGrade <= 59) {
            letterGrade = 'F'
        }
        return `You scored a ${percentGrade}% ${letterGrade}!` }
let result = gradeCalc (29, 40)
console.log(result)