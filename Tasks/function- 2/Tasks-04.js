function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';
    // console.log(words);
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Sample input
let sampleInput = "I am learning Programming to become a programmer";
let sampleOutput = findLongestWord(sampleInput);
console.log("Longest word:", sampleOutput);
