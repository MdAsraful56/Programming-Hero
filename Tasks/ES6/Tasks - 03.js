let data = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "Habluder adda",
                price: "20$"
            }
        },
        {
            bookId: 2,
        }
    ]
}

console.log(data);
console.log(data.data);
console.log(data.data[0]);
console.log(data.data[0].bookDetails);
console.log(data.data[0].bookDetails.name);