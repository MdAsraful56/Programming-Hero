const money = 200;

let food;
if (money > 100) {
    food = 'valo kisu';
} else {
    food = 'cha biscuit';
}

// teranary

let food1 = money > 100 ? 'valo kisu khabo' : 'cha biscuit khabo';

// number to string conversion 

const num1 = 23;
const numStr = num1 + '';

// string to number conversion

const input = '560';
const inputNumber = +input;
// console.log(inputNumber);




const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

// way - 01
isActive ? showUser() : hideUser();
// way - 02
isActive && showUser();

