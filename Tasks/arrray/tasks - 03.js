var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// output : "TomTimTinTik";

let names = ``;
for (const num of numbers) {
    // console.log(num)
    names = names + num;
}

console.log(names);