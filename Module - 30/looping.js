const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

const nobab = 'Alli buddin khan baba';

for (const letter of nobab) {
    console.log(letter);
}

const nayok = {
    name: 'Salman Khan',
    phone: 4578
}

// for (const nay of nayok) {
//     console.log(nay);
    
// } // Error: nayok is not iterable

// for(const nay in nayok) {
//     console.log(nay);
//     console.log(nayok[nay]);
//     // console.log(nay.valueOf());
// }



const products = {
    laptop: 50000,
    mobile: 15000,
    watch: 3000,
    book: 200
}

const keys = Object.keys(products);
for (const key of keys) {
    const values = products[key];
    console.log(key, ":", values);
}