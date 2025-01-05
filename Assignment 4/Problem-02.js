function checkName(name) {
    if (name !== 'string') {
        for (let i = name.length - 1; i >= 0; i--) {
            let element = name[i];
            if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u' || element === 'w' || element === 'y' || element === 'A' || element === 'E' || element === 'I' || element === 'O' || element === 'U' || element === 'W' || element === 'Y') {
                return "Good Name";
            } else {
                return "Bad Name";
            }
        }
    } else {
        return "Invlid"
    }
}

console.log(checkName('asraful'));
console.log(checkName('nayma'));
console.log(checkName(143));



