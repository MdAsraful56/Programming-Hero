class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    activity() {
        // console.log(`${this.name} is doing something`);
        this.sleep();
    }
}


const asrf = new Person('Ashraful', 20);
console.log(asrf);
asrf.sleep(); // Ashraful is sleeping

const nayma = new Person('Nayma', 17);
console.log(nayma);
nayma.sleep(); // Nayma is sleeping