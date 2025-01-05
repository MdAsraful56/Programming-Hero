function getMax(numbers) {
    // console.log(numbers);
    let max = numbers[0];
    for (const number of numbers) {
        // console.log(number);
        if (max < number) {
            max = number
        }
    }
    return max;
}

console.log(getMax([34,45,67,23,67,90,23]));