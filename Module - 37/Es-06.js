const student = {
    name: 'Ashraful Islam',
    age: 20,
    likeGame: ['PUBG', 'Call of Duty']
}


// 1. template string 

const aboutMe = `My name is ${student.name} age of ${student.age} also liked a game ${student.likeGame}`;
console.log(aboutMe);


// 2. arrow function

const getFive = () => 5;
const addFive = x => x + 5;
const isEven = x => x % 2 == 0;

const doMath = (x, y) => {
    const sum = x + y;
    return sum;
}


// 3. spread operator 

const numbers = [12, 34, 42, 56, 88];

const newNumbers = [...numbers]

numbers.push(12);
numbers.push(12);
numbers.push(12);
numbers.push(12);



