const numbers = [1, 2, 3, 4, 5];

// map ==> loops through the array and returns a new array

//mathod 3
// const dobuled = numbers.map(number => number * 2);
// console.log(numbers);
// console.log(dobuled);



// //mathod 2
// const dobuled = number => number * 2;
// const dobule = numbers.map(dobuled);

// console.log(numbers);
// console.log(dobule);



/*mathod 1

const dobuled = [];

for (const number of numbers) {
    dobuled.push(number * 2);
}

console.log(numbers);
console.log(dobuled);
*/



const price = [100, 200, 300, 400, 500];

const updatedPrice = price.map(x => x - (x * 0.15));

// console.log(price);
// console.log(updatedPrice);



const friends = ['Nayma', 'Sultana', 'Jannatul', 'Mawa'];

const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const firstLetter = friends.map(f => f[0]);
console.log(firstLetter);




