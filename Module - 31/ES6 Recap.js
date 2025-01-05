/**
 * 1. let and const
 * 2. Arrow Function
 * 3. Default Parameter
 * 4. Spread Operator
 * 5. Destructuring
 * 6. Template Literals
 * 7.Object.keys, Object.values, Object.entries
 * 8. For of loop
 * 9. for in loop
 */


const square = (x) => x * x;
console.log(square(5));

const {age, x, ...others} = {x: 1, y: 2, z: 3, name: 'John', age: 25};
console.log(age);
console.log(x);
console.log(others);

const [first, second, ...rest] = [1, 2, 3, 4, 5, 'nayma', 'sultana'];
console.log(first);
console.log(second);
console.log(rest);