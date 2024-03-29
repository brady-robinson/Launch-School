// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }

//   startEngine() {
//     return "Ready to go!"
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }

//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'short');
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck(2003, 'short');
// console.log(truck2.startEngine('slow'));

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// let walk = {
//   walk() {
//     return "Let's go for a walk!";
//   }
// }

// Object.assign(Cat.prototype, walk);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, swimMixin)
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {
//   constructor(name) {
//     super(name);
//     Object.assign(this, swimMixin);
//   }
// }

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

// const twoMixin = {
//   tow() {
//     return "I can tow a trailer!";
//   }
// }

// class Truck {}
// Object.assign(Truck.prototype, twoMixin);

// class Car {}

// let truck = new Truck();
// console.log(truck.tow());

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

