function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(12));
console.log(isEven(99));



function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
}