const products = [
    { name: 'jame', price: 1200, quantity: 5},
    { name: 'lungi', price: 400, quantity: 2},
    { name: 'gori', price: 110, quantity: 4},
    { name: 'jame&chosma', price: 1500, quantity: 5},
];


function cardTotal(products) {
    let total = 0;
    for (const product of products) {
        // console.log(product);
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

console.log(cardTotal(products));