const glass = {
    name: "glass",
    price: 100,
    color: "white",
    weight: 200,
    isClean: true,
}

console.log(glass);

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);
console.log(entries); // array of arrays

// delete glass.isClean;
// console.log(glass);

// const {isClean, ...rest} = glass;
// console.log(rest); // { name: 'glass', price: 100, color: 'white', weight: 200 }

// Object.freeze(glass);
// glass.price = 200;
// glass.height = 10;
// delete glass.weight;
// console.log(glass);

// Object.seal(glass);
// glass.price = 200;
// glass.height = 10;
// delete glass.weight;
// console.log(glass);