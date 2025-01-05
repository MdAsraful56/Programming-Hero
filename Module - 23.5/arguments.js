function add(num1, num2) {
    console.log(num1 , num2);
    console.log(arguments);
    console.log(arguments[2]);
}

console.log(add(12,23,34,56,78,90,45,23));