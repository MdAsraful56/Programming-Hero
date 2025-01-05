const student = {
    name: "Ashraful",
    id: 1234,
    isSingle: true,
    friends: ['Shato','Rain','Ratul'],
    laptop: {
        brand: 'HP',
        price: 24000,
        made: 2017,
        buy: 2019,
        SSDManuFacture: {
            first: 2020,
            second: 2022
        }
    }
}

console.log(student);
console.log(student.friends);
console.log(student.friends[1]);
console.log(student.laptop.brand);
console.log(student.laptop.SSDManuFacture.second);
// console.log(student.second);