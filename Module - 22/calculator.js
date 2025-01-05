function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



function calculator(a, b, oparator) {
    if (oparator === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (oparator === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (oparator === 'multiply') {
        return multiply(a, b);
    }
    else if (oparator === 'divide') {
        return divide(a, b);
    }
    else {
        return "Only oparator add ";
    }
}


console.log(calculator(12, 10, 'add'));
console.log(calculator(12, 10, 'divide'));