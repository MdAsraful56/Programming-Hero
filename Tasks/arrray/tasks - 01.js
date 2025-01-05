const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors);
// console.log(colors.reverse());

let colors_rev = [];
for (const color of colors) {
    colors_rev.unshift(color);
}

console.log(colors_rev);