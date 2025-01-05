const data = {
    sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'ABC primary school'},
                    { location: 'Peters burg'}
                ]
            },
            {
                secondary: [
                    { school_name: 'ABC secondary school'},
                    { location: 'UK'}
                ]
            }
        ]
    }
}


// secondary location show task

// console.log(data.sophia.study[1]);

console.log(data.sophia.study[1].secondary[1]);
