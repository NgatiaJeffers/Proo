// 😎😎😎
// OBJECTS
// An object is a collection of related data and/or functionality.

// 1. Literal syntax
// let obj = new Object();

// 2. Object literal syntax
let obj = {
    name: "Apple",
    details: {
        color: "red",
        quantity: 10
    }
};

// Object chaining
obj.details.color; // red
obj["details"]["quantity"]; // 10

// Creating an object prototype
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let myDog = new Dog('Fido', 8)

console.log(myDog);

// The 'for...in' loop to iterate over all the keys in an object.
let person = {
    name: "Jeff",
    age: 20,
    isMale: true
};

for (let key in person) {
    console.log("Key: ", key); // name, age, isMale
    console.log("Person: ", person[key]); // "Jeff", 20, true
}


// Dot Notation vs Bracket
let human = {
    "name": "Fido",
    "age": 10,
    "special[]": "special chars",
}

human.name; // "Fido"
human.age; // 10
human["special[]"]; // 'special chars'

function count(human) {
    for (let i in human) {
        console.log(human[i])
    }
}

let three = {
    "one": 1,
    "two": 2,
    "three": 3
};

console.log(three);

// Nested Objects - A nested object is a regular object. You just need a
// nested loop if you want to reach all properties in the nested objects.
let dogTypes = {
    GermanShepard: {
        color: "black and white"
    },
    Beagle: {
        color: "brown and white"
    },
    cheuwahwah: {
        color: "green and white"
    },
    poodle: {
        color: "purple and white"
    },
};

for (let key in dogTypes) {
    for (let key2 in dogTypes[key]) {
        console.log(key, key2, dogTypes[key][key2]);
    }
}

// null - is a value which indicates a deliberate non-value
// Undefined - a value which indicates a declared but not assigned/initialized value
