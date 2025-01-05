/*
function evenSize(str) {
    let size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    } else {
        console.log('odd size');
        return false;
    }
}

evenSize('malot bari');


*/

function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    } else {
        const result =number * 3;
        return result;
    }
}

console.log(doubleOrTriple(4, true));
console.log(doubleOrTriple(4, false));