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
// }

// let carPrototype = {
//   start: function() {
//     this.started = true;
//   },

//   stop: function() {
//     this.started = false;
//   },

//   init(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this;
//   },
// };

// let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);

// let car1 = Object.create(carPrototype);
// car1.make = 'Toyota';
// car1.model = 'Corolla';
// car1.year = 2016;

// car1.start();
// console.log(car1.started);
// car1.stop();
// console.log(car1.started);