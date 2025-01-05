let students = {
    222: {
        name: 'jack',
        section: "C",
        class: "IX",
        address: {
            'building on': 12,
            'city': 'Petersburg',
            'country': "UK"
        }
    }
}

// console.log(students);
// console.log(students[222]);
// console.log(students[222].address);
console.log(students[222].address.city);