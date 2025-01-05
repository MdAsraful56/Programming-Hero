const products = [
    { name: 'jame', price: 1200},
    { name: 'lungi', price: 400},
    { name: 'gori', price: 110},
    { name: 'jame&chosma', price: 1500},
];

function getShopingTotal(products) {
    let total = 0;
    for (const product of products) {
        // console.log(product);
        total = total + product.price;
    }
    return total;
}

const total = getShopingTotal(products);
console.log(total);

