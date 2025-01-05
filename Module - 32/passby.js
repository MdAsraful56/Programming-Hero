let num1 = 5;
let num2 = 7;

function sum(a, b){
    a = 100;
    const result = a * b;
    return result;
}

const output = sum(num1, num2);

console.log(output);




let student1 = {name: 'jalal', patner: 'monika'};
let student2 = {name: 'labib', patner: 'mily'};

function maker(couple1, couple2){
    couple1.name = "Malek molla";
    couple2.patner = 'single';
}

console.log(student1, student2);

maker(student1, student2);
console.log(student1, student2);