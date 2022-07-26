const cats = ["Pete", "Stewie", "Biggles", "Jasmine"];

let myFavoriteCats = 'My cat are called ';

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) { // we are at the end of the array
        myFavoriteCats += ` and ${cats[i]}.`
    } else {
        myFavoriteCats += ` ${cats[i]},`
    }
}

console.log(myFavoriteCats);