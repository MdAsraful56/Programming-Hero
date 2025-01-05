// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function count_zero(binaryString) {
// Ensure the input is a binary string and contains only '0' or '1'
if (typeof binaryString !== 'string' || /[^01]/.test(binaryString)) {
    throw new Error('Input must be a binary string containing only 0s and 1s');
}

// Count the number of '0's using a regular expression to match all '0's
const zeroCount = (binaryString.match(/0/g) || []).length;

return zeroCount;
}

// Example usage
const binaryString = "101010010";
console.log(count_zero(binaryString));  // Output: 5







// function countZero(inputs) {
//     for (const input of inputs) {
//         console.log(input);
//         if (CharacterData == 0) {
            
//         }
//     }
// }

// const binaryString11 = "101010010";
// console.log(binaryString11);
