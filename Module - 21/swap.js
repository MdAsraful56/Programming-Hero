let x = 3;
let y = 5;

console.log(x , y);
const temp = x;
x = y;
y = temp;
console.log(x , y);


let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
