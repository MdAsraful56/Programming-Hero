const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:
// [12, 98, 76, 46]

let output = [];

for (const num of numbers) {
    if (num % 2 == 0) {
        output.push(num);
    }
}
console.log(output);