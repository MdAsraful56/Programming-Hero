var taka = 50;
taka = 100;

let money = 100;
money = 200;

const price = 100;
// price = 200; // Error: Assignment to constant variable.



for(let i = 0; i < 10; i++) {
    console.log(i);
}


// for(const i = 0; i < 10; i++) {
//     console.log(i);
// } // Error: Assignment to constant variable.



const numbers = [12, 45, 78];

// numbers = [12, 45, 78]; // Error: Assignment to constant variable.

numbers.push(22);
numbers[1] = 88;
numbers.pop();

console.log(numbers);

const nayok = {name: 'Shakib Khan', phone: 4578};

// nayok = {name: 'Jayed Khan', phone: 4578}; // Error: Assignment to constant variable.
console.log(nayok);

nayok.name = 'Salman Khan';
nayok.phone = 4570388858;

console.log(nayok);



let sum = 0;
for(let i = 0; i < 10; i++) {
    const number = i;
    sum = sum + number;
}
console.log(sum);