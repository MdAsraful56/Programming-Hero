function sumOfNumbers(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}


const numbs = [12, 34, 55, 77, 65, 90]
const sum = sumOfNumbers(numbs);
console.log(sum);