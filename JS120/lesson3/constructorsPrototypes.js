function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];

Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`)
}

Dog.species = "Canis lupus";

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark();

// console.log(maxi.hasOwnProperty('bark'));
// console.log(dexter.hasOwnProperty('bark'));
// console.log(biggie.hasOwnProperty('bark'));
// console.log(maxi.bark === dexter.bark);
// console.log(maxi.bark === biggie.bark);
// console.log(biggie.bark === dexter.bark);

// console.log(Dog.prototype.constructor);

// if (maxi.constructor === Dog) {
//   console.log("It's a dog");
// } else {
//   console.log("It's not a dog");
// }

let dexter = new Dog('dexter', 'Rottweiler', 60);

dexter.bark = function() {
  console.log("WOOF!")
}

dexter.bark();
maxi.bark();
console.log(Dog.species);
console.log(dexter.species);
console.log(Dog.allDogs)
Dog.showSpecies()