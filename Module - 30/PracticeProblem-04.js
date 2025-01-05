const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const march = (array1, array2) => {
//     return array1.concat(array2);
// }

// console.log(march(array1, array2)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newArray = [...array1, ...array2];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const arrow = (array1, array2) => {
    return [...array1, ...array2];
}

const finalArray = arrow(array1, array2);
console.log(finalArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const max = finalArray.max();
console.log(max); // 20