const products = [
    {id: 1, name: 'Product 1', price: 200},
    {id: 2, name: 'Product 2', price: 250},
    {id: 3, name: 'Product 3', price: 300},
    {id: 4, name: 'Product 4', price: 350},
    {id: 5, name: 'Product 5', price: 400}
];

// map

const price = products.map(p => p.price);
console.log(price);

// forEach 

products.forEach(p => console.log(p.price));

// filter

const filter = products.filter(p => p.price > 250);
console.log(filter);

// find
const find = products.find(p => p.price > 250);
console.log(find);

// reduce
const total = products.reduce((pre, current) => pre + current.price, 0);
console.log(total);


