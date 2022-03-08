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

