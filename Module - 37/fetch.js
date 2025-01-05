// fetch('url');
//     .then(res => res.json());
//     .then(data => console.log(data));



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))




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


const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys);
console.log(values);