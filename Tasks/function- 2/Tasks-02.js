// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


function Counts(array, find) {
    // console.log(array);
    let output = 0;
    for (const num of array) {
        // console.log(num);
        if (num === find) {
            output += 1;
        }
    }
    return output;
}

const number = [1,2,3,2,4,5,5,2,3,6,3,8,3];
console.log(Counts(number,3));