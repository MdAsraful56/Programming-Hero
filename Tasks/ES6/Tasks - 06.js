const instructor = [
    {name: 'Nodi', age: 28, position: 'senior'},
    {name: 'Akil', age: 22, position: 'junior'},
    {name: 'Ashraful', age: 30, position: 'senior'},
]


let reudus = instructor.reduce((pre, current) => pre= pre + current.age,0);
console.log(reudus)


// let senior = instructor.filter(i => i.position === 'senior')

// let senior = instructor.filter(
//     function ins(i){
//         if (i.position === 'senior') {
//             console.log(i.name)
//             return i.name;
//         }
//     }
// );




