// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog',status);
//     this.master = master;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Hello, ${this.master}. Woof!`;
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this.wheels = 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }

//   getWheels() {
//     return this.wheels;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model);
//     this.wheels = 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model) {
//     super(make, model);
//     this.wheels = 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//     this.wheels = 6;
//   }
// }

// class Person {
//   greeting(text) {
//     console.log(text)
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// let walk = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, walk)

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }
// Object.assign(Cat.prototype, walk)


// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }
// Object.assign(Cheetah.prototype, walk)

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(species, name) {
//     this.species = species;
//     this.name = name;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.numPets = 0;
//   }

//   numberOfPets() {
//     return this.numPets;
//   }

//   adoptPet() {
//     this.numPets += 1;
//   }
// }

// class Shelter {
//   constructor() {
//     this.adoptions = {};
//   }

//   adopt(owner, pet) {
//     owner.adoptPet();

//     if (Object.keys(this.adoptions).includes(owner.name)) {
//       this.adoptions[owner.name].push([pet.name, pet.species]);
//     } else {
//       this.adoptions[owner.name] = [[pet.name, pet.species]];
//     }
//   }

//   printAdoptions() {
//     let adopters = Object.keys(this.adoptions);

//     for(let i = 0; i < adopters.length; ++i) {
//       console.log(`${adopters[i]} has adopted the following pets:`)
//       let pets = this.adoptions[adopters[i]];
//       for (let z = 0; z < pets.length; ++z) {
//         console.log(`a ${pets[z][1]} named ${pets[z][0]}`)
//       }
//       console.log(" ")
//     }
//     console.log(" ")
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let charSeq = "-";

    for (let i = 0; i <= this.message.length; ++i) {
      charSeq += "-";
    }

    return "+" + charSeq + "+";
  }

  emptyLine() {
    let charSeq = " ";

    for (let i = 0; i <= this.message.length; ++i) {
      charSeq += " ";
    }

    return "|" + charSeq + "|";
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();

