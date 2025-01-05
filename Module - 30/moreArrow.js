const difference = (a, b) => a - b;
console.log(difference(12, 45)); // -33


const students = {
    name: 'Shakib',
    age: 45,
    movies: ['King Khan', 'Dhakar Mastan']
}

const getAge = (person) => person.age;

const age = getAge(students);
console.log(age); // 45

const getMovies = (person) => person.movies;
const movies = getMovies(students);
console.log(movies); // [ 'King Khan', 'Dhakar Mastan' ]



const getPI = () => Math.PI;
console.log(getPI());


const doMath = (x, y, z) => {
    const sum = x + y + z;
    return sum;
}

console.log(doMath(12, 34, 56));