function add(num1, num2) {
    // console.log(typeof num1)
    if (typeof num1 !== 'number' || num2 !== 'number') {
        return "Right Number Input";
    }
    return num1 + num2;
}

console.log(add(12, 'tWo'));


function fullNames(first, last) {
    if (typeof first !== 'string' || typeof last !== 'string') {
        return "PLZ Right a Strings";
    }
    const Names = first + ' ' + last;
    return Names;
}

console.log(fullNames('asraful', 'islam'));