let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

let key = Object.keys(myObject);
console.log(key);

let myObjectTypes = Object.values(typeof(myObject));
console.log(myObjectTypes)


// output 
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean