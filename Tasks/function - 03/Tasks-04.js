// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(array) {
    let sumPhonePrice = 0;
    let size = array.length;
    for (const ary of array) {
        // console.log(ary);
        sumPhonePrice = sumPhonePrice + ary.price;
    }
    let Avg = sumPhonePrice / size;
    let AvgResult = parseInt(Avg);
    return AvgResult;
}

console.log(findAveragePhonePrice(phones));