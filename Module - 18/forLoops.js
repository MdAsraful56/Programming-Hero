let number = 100;

for (let i = 0; i <= number; i++) {
    console.log(i);
}

for (let i = 0; i <= number; i = i + 2) {
    console.log(i);
}

let sum = 0;
for (let i = 0; i <= number; i++) {
    sum += i;
}
console.log(sum);