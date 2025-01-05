// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers) {
    let sum = 0;
    let size = numbers.length;
    for (const number of numbers) {
        sum = sum + number;
    }
    let result = sum / size;
    return result;

}

const arrayNumber = [12,23,45,56,11];
console.log(make_avg(arrayNumber));