function odd_avg(numbers) {
    let sum = 0;
    let size = numbers.length;
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    }
    const avg = sum / size;
    return avg;
}

const num = [12,11,23,22,34,33,45,44,11];
console.log(odd_avg(num));