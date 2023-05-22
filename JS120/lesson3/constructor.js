// function createCar(make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     started: false,

//     start() {
//       this.started = true;
//     },

//     stop() {
//       this.started = false;
//     },
//   };
// };

// let corolla = createCar('Toyota', 'Corolla', 1995)



// function Car(make, model, year) {
//   this.make = make,
//   this.model = model,
//   this.year = year,
//   this.started = false,

//   this.start = function() {
//     this.started = true;
//   };

//   this.stop = function() {
//     this.started = false;
//   };
// }

// let corolla = new Car('Toyota', 'Corolla', 1995)
// console.log(corolla.year)

// let foo = {
//   Car: function(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }

// let car1 = new foo.Car('Toyota', 'Camry', 2019);
// console.log(car1.make);



// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   return { foo: 1 };
// }

// let fluffy = new Cat('fluffy', 'Persian', 15);
// console.log(fluffy.weight);


// function Car(make, model, year, color, passengers, convertible, mileage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.passengers = passengers;
//   this.convertible = convertible;
//   this.mileage = mileage;
//   this.started = false;

//   this.drive = function() {
//     this.started = true;
//   }
// }

// function Car(args) {
//   this.make = args.make;
//   this.model = args.model;
//   this.year = args.year;
//   this.color = args.color;
//   this.passengers = args.passengers;
//   this.convertible = args.convertible;
//   this.mileage = args.mileage;
//   this.started = false;

//   this.drive = function() {
//     this.started = true;
//   }
// }

// function Car(args) {
//   Object.assign(this,args);

//   this.drive = function() {
//     this.started = true;
//   }
// }

// let civicArgs = {
//   make: 'Honda',
//   model: 'Civic',
//   year: 2016,
//   color: 'black',
//   passengers: 5,
//   convertible: false,
//   mileage: 16000,
// }

// let civic = new Car(civicArgs);
// console.log(civic.make);

// if (civic instanceof Car) {
//   console.log("It's a car")
// } else {
//   console.log("It's not a car")
// }


function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering")
  };
}

let lizzy = new Lizard();
lizzy.scamper();

