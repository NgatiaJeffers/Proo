// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions

const SCRIPTS = require('./scripts.js');

// import SCRIPTS from "./scripts.js";
require('./scripts.js')

// 1. Functions that create new function
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// 2. Functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let res = f(...args);
        console.log("Called with", args, ", returned", res);
        return res;
    };

}
noisy(Math.min)(3, 2, 1);

// FILTERING ARRAYS
const filter = (array, test) => {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction === "ttb"));

// TRANSFORMING WITH MAP
const map = (array, transform) => {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rltScripts = SCRIPTS.filter(s => s.direction === "rtl");
console.log(map(rltScripts, s => s.name));