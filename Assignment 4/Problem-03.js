function deleteInvalids(array) {
    let NewArray = [];
    for (const ary of array) {
        // console.log(ary);
        if (typeof ary === 'number') {
            NewArray.push(ary);
            // console.log(ary)
        } 
    }
    return NewArray;
}


let array = [NaN, 12,0,-4,22, undefined, "hello", 'Mama'];
console.log(deleteInvalids(array));