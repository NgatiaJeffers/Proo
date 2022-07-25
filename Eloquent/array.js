const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);

// An array inside an array is called an Multidimensional Array 😎
// You can access an item inside an array that is inside
// another array by chaining two sets of square brackets together.
const random = ["Tree", 795, [0, 1, 2]];
let numberOnRandom = random[2][2];
console.log(numberOnRandom);

// FINDING ITEMS IN AN ARRAY 😎
// You can find the index of a particular item using the
// indexOf() method.
// This takes an argument and returns the index, or -1 if
// the item was not found in the array
const birds = ["parrot", "Falcon", "Owl"];
let findIndexOfOwl = birds.indexOf("Owl");
let findIndexOfRabbit = birds.indexOf("Rabbit");
console.log(findIndexOfOwl);
console.log(findIndexOfRabbit);

// ADDING ITEMS 😎
// To add one or more items to the end of an array we can use
// push()

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities);
cities.push("Brandford", "Brighton");
console.log(cities);

const newLength = cities.push("Bristol");
console.log(newLength);

// To add a new item to the start of the array, unShift()
cities.unshift("Edinburgh");
console.log(cities);