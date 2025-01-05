// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowest(array) {
    let result = array[0];
    for (const ary of array) {
        // console.log(ary);
        if (result > ary) {
            result = ary;
        }
    }
    return result;
}

console.log(lowest(heights2));