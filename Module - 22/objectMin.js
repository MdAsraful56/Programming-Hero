const mobiles = [
    { name: 'Samsung', price: '20000', camera: '50 mp', color: 'black'},
    { name: 'oppo', price: '17000', camera: '50 mp', color: 'black'},
    { name: 'mi', price: '24000', camera: '50 mp', color: 'black'},
    { name: 'infinix', price: '12000', camera: '50 mp', color: 'black'},
    { name: 'i phone', price: '133000', camera: '50 mp', color: 'black'},
];

function getMobile(phones) {
    // console.log(phone);
    let min = phones[0]
    for (const phone of phones) {
        // console.log(phone);
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min;
}

console.log(getMobile(mobiles));