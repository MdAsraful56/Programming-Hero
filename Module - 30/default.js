function add(a, b) {
    let sum = a + b;
    console.log(a, b, sum);
    return sum;
}

// console.log(add(12, 45)); // 57
// console.log(add(4));

add(12, 45); // 57
add(4); // NaN



function add2(a, b = 0) {
    console.log(a, b, a + b);
    return a + b;
}


add2(12, 45); // 57
add2(4); // 4
add2(12); // 12


function add3(a = 0, b = 99) {
    console.log(a, b, a + b);
    return a + b;
}

add3(12, 45); // 57
add3(4); // 103
add3(); // 99


function createUser(name, age = 18) {
    const user = {name: name, age: age};
    return user;
}

console.log(createUser('Shakib Khan', 45));
console.log(createUser('Salman Khan'));


function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

console.log(fullName('Shakib', 'Al Hasan'));
console.log(fullName('Shakib'));


function arraySum(numbers = []) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

console.log(arraySum([12, 45, 78]));
console.log(arraySum());
