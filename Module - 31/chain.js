const data = [
    {
        id: 1,
        name: 'John Doe',
        age: 25
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 32
    },
    {
        id: 3,
        name: 'Jim Doe',
        age: 28
    }
]


// console.log(data);
// console.log(data[2]);

// console.log(data[0].name);


const products = {
    count: 20,
    data: [
        {
            id: 1,
            name: 'Product 1',
            price: 200
        },
        {
            id: 2,
            name: 'Product 2',
            price: 250
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300
        }
    ]
}

// console.log(products);
// console.log(products.data);
// console.log(products.data[2].price);



const user = {
    id: 101,
    name: 'John Doe',
    age: 25,
    education: {
        degree: 'Masters',
        school: {
            name: 'Oxford',
            location: 'UK'
        }
    }
}

const user2 = {
    id: 102,
    name: 'Jane Doe',
    age: 22,
    education: {
        degree: 'Graduation',
    }
}


// console.log(user);
// console.log(user.education);
// console.log(user.education.school);

console.log(user.education.school.location);
console.log(user2.education.school?.location);