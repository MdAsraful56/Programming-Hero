const avg = (a, b, c, d) => {
    const sum = a + b + c + d;
    return sum / 4;
}

console.log(avg(2, 3, 4, 5)); // 3.5


const numbers = [1, 2, 3, 4, 5];
const avg2 = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum / numbers.length;
}

console.log(avg2(numbers)); // 3