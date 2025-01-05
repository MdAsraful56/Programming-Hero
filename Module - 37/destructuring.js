// 1. array destructuring 

const numbers = [45, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [30, 45];
const [x, y] = numbers;

console.log(x, y);



// 2. object destruturing

const student = {
    name: 'Ashraful Islam',
    age: 20,
    likeGame: ['PUBG', 'Call of Duty'],
    specification: {
        height: 66,
        weight: 70,
        drink: 'water'
    }
}

const {name, age} = student;
console.log(name, age);

const [game01, game02] = student.likeGame;
console.log(game01, game02);

const {drink, weight} = student.specification;
console.log(drink, weight);