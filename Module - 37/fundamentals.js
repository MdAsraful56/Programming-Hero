// 1. How to declaer a variable using let & const 

const Name = 'Ashraful';
let Month = 'May';
Month = 'Jun';
Month = 'July';


// 2. 6 basic conditions : >,< , ===, !==, <=, >= 
// multiple conditions : && , ||

if (Name === 'Ashraful') {
    console.log('something is right');
}


// 3. array declare 
// index length push pop

const numbers = [12,23,54,56,87,54,12,33,55];



// 4. loops 

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// 5. function 

function multiply(x, y) {
    const result = x * y;
    return result;
}

const output = multiply(12, 45);
console.log(output);


// 6. object 
// 3 way to access property by name 

const student = {
    name: 'Ashraful Islam',
    age: 20,
    likeGame: ['PUBG', 'Call of Duty']
}

console.log(student.age);
console.log(student['age']);
const Extra = 'age';
console.log(student[Extra]);