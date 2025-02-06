class  Person {
    #name;
    constructor(name, age, city) {
        this.#name = name;
        this._age = age;
        this._city = city;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (typeof name === "string" && name.length > 0) {
            this.#name = name;
        } else {
            console.log("Invalid name.");
        }
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0) {
            this._age = age;
        } else {
            console.log("Invalid age.");
        }
    }

    get city() {
        return this._city;
    }

    set city(city) {
        if (typeof city === "string" && city.length > 0) {
            this._city = city;
        } else {
            console.log("Invalid city");
        }
    }

    getInfo() {
        return `${this.#name}, ${this._age} yeas old, live in ${this._city}.`;
    }
}

const person = new Person("Jim", 30, "New York");
console.log(person.getInfo());

