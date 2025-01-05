const user = { id: 1, name: 'Gorib Aamir'};
console.log(user);

// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);
console.log(stringified);


// output
// { id: 1, name: 'Gorib Aamir' }
// {"id":1,"name":"Gorib Aamir"}




const shop = {
    owner: 'Ashraful',
    address: {
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['laptop','mobile','mic'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const stringifiedShop = JSON.stringify(shop);
console.log(stringifiedShop);

const shopJson = JSON.parse(stringifiedShop);
console.log(shopJson);