const products = [
    {name: 'mobile', price: 3000, brand: 'Infinix', color: 'black'},
    {name: 'tab', price: 12000, brand: 'samsung', color: 'blue'},
    {name: 'laptop', price: 22000, brand: 'lenovo', color: 'gray'},
    {name: 'camara', price: 32000, brand: 'canon', color: 'black'},
]

const brands = products.map(product => product.brand);
console.log(brands);

products.forEach(product => console.log(product.price));

const spacelNameCh = products.filter(product => product.name.includes('l'))
console.log(spacelNameCh);

const spacelNameChFind = products.find(product => product.name.includes('t'));
console.log(spacelNameChFind);







const newProduct = {name: 'webcam', price: 700, brand: 'KisoAKta'};

const newProducts = [...products, newProduct]

console.log(products);
console.log(newProducts);


const remaining = products.filter(product => product.name !== 'tab');

console.log(remaining);