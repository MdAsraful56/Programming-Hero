const mobiles = [
    { name: 'Samsung', price: '20000', camera: '50 mp', color: 'black'},
    { name: 'oppo', price: '17000', camera: '50 mp', color: 'black'},
    { name: 'mi', price: '20000', camera: '50 mp', color: 'black'},
    { name: 'infinix', price: '12000', camera: '50 mp', color: 'black'},
    { name: 'i phone', price: '1330000', camera: '50 mp', color: 'black'},
];

function getMobile(phones) {
    // console.log(phone);
    let max = phones[0]
    for (const phone of phones) {
        // console.log(phone);
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

console.log(getMobile(mobiles));