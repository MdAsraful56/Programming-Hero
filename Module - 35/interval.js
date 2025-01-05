console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3);
});

setTimeout(() => {
    console.log('4 sec late')
}, 4000);

console.log(4);
console.log(5);

let num = 0;
const clockId = setInterval(() => {
    num++;
    if (num > 10) {
        clearInterval(clockId);
    }
    console.log(num);
}, 1000);