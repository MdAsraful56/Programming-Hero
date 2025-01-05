// Task-3:
// Write a function to count the number of vowels in a string.


function vowelsCounts(string) {
    // console.log(string);
    let count = 0;
    for (const str of string) {
        // console.log(str);
        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U') {
            count = count + 1;
        }
    }
    return count;
}

const Texts = "Hello Mama";
console.log(vowelsCounts(Texts));

console.log(vowelsCounts("A Man is a Good Man. HE IS A POOR MAN"))