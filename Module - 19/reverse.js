
let sentence = `I am a good man & I love You`;


let reverse = '';
for (const sentencesss of sentence) {
    // console.log(sentencesss);
    reverse = sentencesss + reverse;
}

console.log(reverse);

let rev = '';
for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    // console.log(element);
    rev = element + rev;
}

console.log(rev);


const reversed = sentence.split('').reverse().join();
console.log(reversed);