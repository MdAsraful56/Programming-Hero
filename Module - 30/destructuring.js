const students = {
    name: 'John Doe',
    age: 25,
    movies: ['The Avengers', 'The Dark Knight']
}

// console.log(students.age);
// console.log(students.age);
// console.log(students.age);
// console.log(students.age);
// console.log(students.age);

const age = students.age;


// console.log(age); // 25
// console.log(age); // 25
// console.log(age); // 25
// console.log(age); // 25
// console.log(age); // 25

const {name, movies} = students;

// console.log(name); // John Doe
// console.log(name); // John Doe
// console.log(name); // John Doe
// console.log(name); // John Doe

// console.log(movies); // [ 'The Avengers', 'The Dark Knight' ]
// console.log(movies); // [ 'The Avengers', 'The Dark Knight' ]
// console.log(movies); // [ 'The Avengers', 'The Dark Knight' ]

const {name: fullName, movies: films} = students;

// console.log(fullName); // John Doe
// console.log(fullName); // John Doe
// console.log(fullName); // John Doe

// console.log(films); // [ 'The Avengers', 'The Dark Knight' ]
// console.log(films); // [ 'The Avengers', 'The Dark Knight' ]
// console.log(films); // [ 'The Avengers', 'The Dark Knight' ]



// array destructuring

const numbers = [45, 55, 78, 44, 99, 33];
const [first, second] = numbers;

console.log(first); // 45
console.log(second); // 55


const [firstNumber, ...restNumbers] = numbers;
console.log(firstNumber); // 45
// console.log(restNumbers); // [ 55, 78 ]
console.log(restNumbers); // [ 55, 78, 44, 99, 33 ]


const double = (x, y) => {
    return [x * 2, y * 2];
}

const [doubleFirst, doubleSecond] = double(5, 7);
console.log(doubleFirst); // 10
console.log(doubleSecond); // 14