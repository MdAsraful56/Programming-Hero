// Task -2:
// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function lowest(array) {
    let result = array[0]
    for (const ary of array) {
        // console.log(ary);
        if (result < ary) {
            result = ary;
        }
    }
    return result;
}

console.log(lowest(heights2));