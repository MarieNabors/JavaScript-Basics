let temp = 150

//Logical And Operator: True if both sides are true; otherwise false.
//Logical OR operator: True if at least one side is true; false otherwise.
if(temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out.')
}
if(temp<= 9 || temp>= 120) {
    console.log('Do not go outside.')
} else {
    console.log('Do what you want.')
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

//Are both vegan? If so, only offer up vegan dishes.
//At least one vegan? Offer some vegan options.
//Else, offer anything on the menu.

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Vegan only.')
} else if(isGuestOneVegan  || isGuestTwoVegan){
    console.log('Some vegan.')
} else {
    console.log('Anything on menu')
}