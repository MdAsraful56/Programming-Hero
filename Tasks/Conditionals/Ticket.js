/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let PeopleAge = 70;
let Students = true;
Students = false;

if (PeopleAge < 10) {
    console.log("Free");
    console.log("Your Pay Amount = 00 tk");
}
else if (Students == true) {
    console.log("Grts a 50% Discount");
    console.log("Your Pay Amount = 400 tk");
}
else if (PeopleAge >= 60) {
    console.log("Your pay Amount = 680 tk");
}
else {
    console.log("Your pay Amount = 800 tk")
}