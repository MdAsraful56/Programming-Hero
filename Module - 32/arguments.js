function sum(a, b) {
    // console.log(arguments);
    // console.log(arguments[2]);
    const args = [...arguments];
    args.push(100);
    console.log(args);
    const result = a + b;
    return result;
}

console.log(sum(12,34));
console.log(sum(12,34,68));