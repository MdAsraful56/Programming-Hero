// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function randomNumbers(number) {
    if (number % 2 === 0) {
        const even = number / 2;
        return even;
    } else {
        const odd = number * 2;
        return odd;
    }
}

console.log(randomNumbers(11));

