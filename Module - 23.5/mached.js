const products = [
    {id: 1, name: 'iPhone', Price: 120000},
    {id: 2, name: 'laptop', Price: 120000},
    {id: 3, name: 'MI PHONE', Price: 120000},
    {id: 4, name: 'Infinix pHoNe', Price: 120000},
    {id: 5, name: 'HONOR PhOne', Price: 120000},
]


function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

console.log(matchedProducts(products, 'Phone'));