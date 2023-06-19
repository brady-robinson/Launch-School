// class Animal {
//   move() {}
// }

// class Fish extends Animal {
//   move() {
//     console.log("swimming");
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log("walking");
//   }
// }

// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
// animals.forEach(animal => animal.move());

// class Chef {
//   prepare(wedding) {
//     this.prepareFood(wedding.guests);
//   }

//   prepareFood(guests) {
//     console.log(`Preparing food for ${guests}`)
//   }
// }

// class Decorator {
//   prepare(wedding) {
//     this.decoratePlace(wedding.flowers);
//   }

//   decoratePlace(flowers) {
//     console.log(`Decorating with ${flowers}`)
//   }
// }

// class Wedding {
//   constructor(guests, flowers) {
//     this.guests = guests;
//     this.flowers = flowers;
//   }

//   prepare(preparers) {
//     preparers.forEach(preparer => {
//       preparer.prepare(this);
//     })
//   }
// }

// Wedding.prototype.me = function() {
//   console.log(this)
// }

// let wed = new Wedding("Robinsons", "roses");
// console.log(Wedding.prototype)
// // console.log(Wedding.me)
// console.log(wed.me())
// wed.prepare([new Chef(), new Decorator]);


// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// // missing code
// function Child(name, school) {
//   Person.call(this, name);
//   this.school = school;
// }

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log(child.name);

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true


function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

// your code from the previous question.
function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}
// more missing code
Child.prototype = Object.create(Person);
Child.prototype.constructor = Child;

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person);                              // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log(child.speak() === "Hello, my name is Suzy.");          // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);                    // true
console.log(person instanceof Person);                             // true
console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined);                          // true
console.log(person.speak() === "Hello, my name is Pete.");         // true
console.log(person.learn === undefined);                           // true
