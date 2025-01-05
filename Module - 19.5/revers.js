const numbers = [1,2,3,4,5,6,7,8,9];

// console.log(numbers);

// console.log(numbers.reverse());

let rev_numbers = [];

for (const num of numbers) {
    rev_numbers.unshift(num);
}

// console.log(rev_numbers);


let revNumbers = [];

for(let i = 0; i <numbers.length; i++) {
    const num = numbers[i];
    revNumbers.unshift(num);
}

// console.log(revNumbers);

let elemens = [];
for(let i = numbers.length - 1; i >= 0; i--) {
    const num1 = numbers[i];
    elemens.push(num1);
}
console.log(elemens);