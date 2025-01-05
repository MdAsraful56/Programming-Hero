// function add(a, b) {
//     let sum = a + b;
//     return sum;
// }


function add(a, b) {
    // let sum = a + b;
    return a + b;
}

console.log(add(12, 45)); // 57
// console.log(add(4)); // NaN


const sum = function add(a, b) {
    return a + b;
}

console.log(sum(12, 45)); // 57


const add2 = (a, b) => a + b;

console.log(add2(12, 45)); // 57



const add3 = (a, b, c, d) => a * b * c * d;

console.log(add3(2, 3, 4, 5)); // 120


const add4 = () => "Hello World";

console.log(add4()); // Hello World

const add5 = a => (a * 5) * a;

console.log(add5(5)); // 125