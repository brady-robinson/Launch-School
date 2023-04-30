// function createCar (make, model, year) {
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

let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
console.log(b.foo);
