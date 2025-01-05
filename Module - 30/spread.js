const max = Math.max(23, 45, 65, 78);
console.log(max); // 78

const numbers = [23, 45, 65, 78];
const maxInArray = Math.max(numbers);

console.log(maxInArray); // NaN

const maxInArray2 = Math.max(...numbers);
console.log(maxInArray2); // 78



const numbers2 = [23, 45, 65, 78];
const numbers3 = numbers2;
numbers2.push(55);
console.log(numbers2); // [ 23, 45, 65, 78, 55 ]
console.log(numbers3); // [ 23, 45, 65, 78, 55 ]



const numbers4 = [23, 45, 65, 78];
const numbers5 = [...numbers4];
numbers4.push(55);
console.log(numbers4); // [ 23, 45, 65, 78, 55 ]
console.log(numbers5); // [ 23, 45, 65, 78 ]


