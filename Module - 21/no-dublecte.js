
const nameList = ["asraful", 'rain', 'asraful', 'shanto', 'raatul', 'shanto'];
const numberList = [1,4,3,6,2,1,4,7,8,9,8];

function noDuplicate(array) {
    // console.log(array);
    const unicqu = [];
    for (const iten of array) {
        if (unicqu.includes(iten) === false) {
            unicqu.push(iten);
        }
    }
    return unicqu;
}

console.log(noDuplicate(nameList));
console.log(noDuplicate(numberList));