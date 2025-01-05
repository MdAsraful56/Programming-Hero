function evenNumbersOnly(numbers) {
    let even = [];
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            // return number;
            console.log(number);
            even.push(number);
        }
    }
    return even;
}

const even = evenNumbersOnly([12, 11, 13, 34, 56, 65]);
console.log(even);