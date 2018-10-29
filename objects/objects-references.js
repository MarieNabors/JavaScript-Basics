let myAccount = {
    //3 properties in object
    name: 'Marie Nabors',
    expenses: 0,
    income: 0
}

//create function to track additional expenses on account

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)
//addIncome

let addIncome = function (account, earnings){
    account.income = account.income + earnings
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance} available. $${account.income} in income. $${account.expenses} in expenses.`
}
addIncome(myAccount, 1000)
console.log(myAccount)

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
