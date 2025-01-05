const statement = 'I am a hard working person'
let revs = '';

// for(let i = 0; i < statement.length; i++) {
//     // console.log(statement[i])
//     revs += statement[i];
// }
// console.log(revs);

for(let i = statement.length - 1; i >= 0; i--) {
    revs += statement[i];
}

console.log(revs);

// for (const element of statement) {
//     revs.at(element)
// }

// console.log(revs);