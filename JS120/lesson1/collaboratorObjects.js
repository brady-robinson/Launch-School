// let brady = {
//   name: 'Brady',
//   heroes: ['Superman', 'Batman', 'Spiderman'],

//   printName() {
//     console.log(`My name is ${this.name}!`);
//   },

//   allHeroes() {
//     return this.heroes.join(', ');
//   },
// };

// brady.printName();
// console.log(brady.allHeroes());



// let cat = {
//   name: 'Fluffy',

//   makeNoise() {
//     console.log('Meow! Meow!');
//   },
// };

// let brady = {
//   name: 'Brady',
//   pet: cat,

//   printName() {
//     console.log(`My name is ${this.name}!`);
//     console.log(`My pet's name is ${this.pet.name}!`);
//   },
// };

// brady.printName();
// brady.pet.makeNoise();



let cat = {
  name: "Fluffy",

  makeNoise() {
    console.log("Meow! Meow!");
  },
};

let dog = {
  name: "Don",

  makeNoise() {
    console.log("Woof! Woof!");
  },
};

let brady = {
  name: 'Brady',
  pets: [],
};

brady.pets.push(cat);
brady.pets.push(dog);

brady.pets[1].makeNoise();


