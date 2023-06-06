// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.getArea());

// // Square
// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// // Square.prototype.getArea = function() {
// //   return this.length * this.width;
// // }

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// }

// let sqr = new Square(5);
// console.log(sqr.getArea());
// console.log(sqr.toString());
// console.log(sqr.constructor === Square);

// function Human() {}
// Human.prototype.myName = function() { return this.name; };
// Human.prototype.myAge = function() { return this.age; };

// function Person() {}
// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;
// Person.prototype.toString = function() {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} year old.`;
// };

// let will = new Person();
// will.name = 'William';
// will.age = 28;
// will.toString();

// class Human {
//   myName() { return this.name; }
//   myAge() { return this.age; }
// }

// class Person extends Human {
//   toString() {
//     return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
//   }
// }

// let will = new Person();
// will.name = 'William';
// will.age = 28;
// console.log(will.toString());

// function Greeting() {}

// Greeting.prototype.greet = function(message) {
//   console.log(message);
// }

// function Hello() {}

// Hello.prototype = Object.creat(Greeting.prototype);

// Hello.prototype.hi = function() {
//   console.log("Hi!")
// }

// function Bye() {}

// Bye.prototype = Object.create(Greeting.prototype)

// Bye.prototype.bye = function() {
//   console.log("Bye!")
// }


// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea() {
//   return this.length * this.width;
// }

// Rectangle.prototype.toString() {
//   return `[Rectangle ${this.length} x ${this.width}]`
// }

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString() {
//   return `[Square ${this.length} x ${this.width}]`
// }


// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   toString() {
//     return `[Rectangle ${this.length} x ${this.width}]`
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   toString() {
//     return `[Square ${this.length} x ${this.width}]`
//   }
// }




