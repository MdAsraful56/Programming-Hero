function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

const price = [1200, 2300, 34000, 100000, 22000, 43000];

console.log(getMin(price));