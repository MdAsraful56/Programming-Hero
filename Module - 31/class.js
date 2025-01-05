class Product {
    country = 'Bangladesh';
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const p = new Product();
console.log(p);
console.log(p.country);
p.speak('javascript'); // talking about javascript 


class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    teach(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
}

const t = new Teacher('John Doe', 30);
console.log(t);
t.teach('javascript'); // John Doe is now teaching javascript