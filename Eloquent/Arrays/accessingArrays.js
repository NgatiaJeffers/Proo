// 😎😎😎
// ACCESSING EVERY ITEM 😎
// for...of
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
    console.log(bird)
}

// Sometimes you'll want to do the same thing to each item in an array
// leaving you with an array containing the changed items.
// map():
const double = (number) => {
    return number * 2;
}
const numbers = [5, 2, 6, 7, 8];
const doubled = numbers.map(double);
console.log(doubled);
// 🔀 We give a function to the map() and the map() calls the function once
// for each item in the array, passing in the item. It then adds
// the return value from each function call to a new array, and
// finally return the new array.

// 💬 Creating a new array containing only the items in the original array
// that match some test filter():
const isLong = (city) => {
    return city.length > 8;
}

const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong); // If the func returns true, then item is added
console.log(longer);                  // to a new array

// 😎😎😎
// CONVERTING BETWEEN STRINGS AND ARRAYS
// split():
const data = "Manchester, London, Liverpool, Birmingham, Leeds, Carlisle";

const newData = data.split(",");
console.log(newData);
let dataLength = newData.length; // length of the array
let firstItem = newData[0];
let secondItem = newData[1];
let lastItem = newData[newData.length - 1];
console.log(dataLength); // 6
console.log(firstItem); // Manchester
console.log(secondItem); // London
console.log(lastItem); // Carlisle

// join():
const commaSeparated = newData.join(",");
console.log(commaSeparated);