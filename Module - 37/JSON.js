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

const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log(studentObj);