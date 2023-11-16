class Person {
    _age = 0;
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x;
        }
    }
}

let p1 = new Person("Claudine", "Roberto");
let p2 = new Person("Pedro", "Silva");
let p3 = new Person("Maria", "Barros");

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos`);
