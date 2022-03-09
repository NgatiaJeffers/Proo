import { sumValues } from "./sum";
import { asyncAdd } from "./async";

console.log("Hello World!");

// Defining and Using Functions
const myFunc = function() {
    console.log("This statement is inside the function");
}

console.log("This statement is outside the function");

myFunc();

// Defining Functions with Parameters
function today(name, weather = "Sunny") {
    console.log("Hello " + name + ", the weather is " + weather);
}

today("Adam");

// Using default and rest parameters
function words(name, weather, ...extraArgs) {
    console.log("Hello " + name + ", the weather is " + weather);
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra argument: " + extraArgs[i]);
    }
}

words("Adam", "Cloudy", "with", "a", "rainbow");

// Defining Functions with Return Values
function add(x, y) {
    return x + y;
}

console.log(add(2, 3));

// Using functions as arguments to other functions
function myFunction(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

function printName(nameFunction, printFunction) {
    printFunction(myFunction(nameFunction));
}

printName(function () { return "Adam"; }, console.log);


// Using Arrow Functions
const letters = (n, m) => n + m;

// Using varibles and Types
function messageFunction(name, weather) {
    let message = 'Hello, Kyle';
    if (weather === "Sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

messageFunction("Jeff", "raining");

// Using Variables Closures
function variableFunc(name) {
    let myLocalvar = "Sunny";
    let innerFunc = function () {
        return ("Hello " + name + ", the weather is " + myLocalvar);
    }
    return innerFunc;
}

console.log(variableFunc("Adam")());

// Using Conditional Statements
let word = "Jeff";

if (word === "Jeff") {
    console.log("Name is Jeff");
} else if (word === "Adam") {
    console.log("Name is not Adam");
} else {
    console.log("Name is not Jeff or Adam");
}

switch (word) {
    case "Jeff":
        console.log("Name is Jeff");
        break;
    case "Adam":
        console.log("Name is not Adam");
        break;
    default:
        console.log("Name is not Jeff or Adam");
        break;
}

// The Equality Operator vs The Identity Operator
let firstVal = 5;
let secondVal = "5";

if (firstVal === secondVal) {
    console.log("They are equal");
} else {
    console.log("They are not equal");
}

// Working with Arrays
let myArray = new Array();
myArray[0] = "Adam";
myArray[1] = "Jeff";
myArray[2] = "Kyle";
myArray[3] = 100;

// Using an Array Literal
let newArray = ["Adam", "Jeff", "Kyle", 100];

for (let i = 0; i < newArray.length; i++) {
    console.log(`Index ${i}: ${newArray[i]}`); 
}
console.log("---");

newArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

// Using the Spread Operator
function items(numValue, stringValue, boolValue) {
    console.log(`Number: ${numValue}`);
    console.log(`String: ${stringValue}`);
    console.log(`Boolean: ${boolValue}`);
}

let myOtherArray = [1, "Adam", true];
items(...myOtherArray);

// Processing an Array
let products = [
    { name: "iPhone", price: 699.99, stock: 10 },
    { name: "Kindle", price: 299.99, stock: 5 },
    { name: "Nexus", price: 299.99, stock: 3 },
    { name: "iPad", price: 499.99, stock: 2 },
    { name: "MacBook", price: 999.99, stock: 0 },
];

let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log(`Total value of inventory: $${totalValue.toFixed(2)}`);

// Working with Objects
let myData = new Object();
myData.name = "Adam";
myData.age = 30;

console.log(`Name: ${myData.name}`);
console.log(`Age: ${myData.age}`);

let data = {
    name: "Adam",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};

console.log(`Name: ${data.name}`);
console.log(`Age: ${data.age}`);
console.log(`Hobbies: ${data.hobbies}`);

// Using Functions as Methods
let myObject = {
    name: "John",
    age: 30,
    print: () => {
        console.log(`Name: ${myObject.name}`);
        console.log(`Age: ${myObject.age}`);
    }
};

myObject.print();


/* USING CLASSES */
class AdamsData {
    constructor() {
        this.name = "Kylie";
        this.age = 25;
    }

    print = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let adamData = new AdamsData();
adamData.print();

// Destructuring
let secondObject = {...adamData, age: 26};
console.log(`Name: ${secondObject.name}`);

// Capturing Parameter Names from Objects
const glass = {
    name: "Bob",
    location: {
        city: "New York",
        state: "NY"
    },
    employment: {
        company: "Google",
        position: "Software Engineer"
    }
}

function printDetails(data) {
    console.log(`Name: ${data.name}`);
    console.log(`Location: ${data.location.city}, ${data.location.state}`);
    console.log(`Employment: ${data.employment.company}, ${data.employment.position}`);
}

printDetails(glass);

let values = [10, 20, 30, 40, 50];

asyncAdd(values).then(total => console.log(`Main Total: ${total}`));

