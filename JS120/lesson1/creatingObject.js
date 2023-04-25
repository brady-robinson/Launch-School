// let person = {
//   name: "John",
//   age: 33,
// };

// let raceCar = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,

//   startEngine: function () {
//     raceCar.engineOn = true;
//   },

//   drive: function() {
//     raceCar.fuelLevel -= 1;
//   },

//   stopEngine: function() {
//     raceCar.engineOn = false;
//   },

//   refuel: function(percent) {
//     if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//       raceCar.fuelLevel += (percent / 100);
//     } else {
//       raceCar.fuelLevel = 1;
//     }
//   },
// };

// raceCar.refuel(30);
// console.log(raceCar.fuelLevel);



// let person = {
//   name: "John",
//   age: 33,
// };

// let raceCar = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,

//   startEngine() {
//     raceCar.engineOn = true;
//   },

//   drive() {
//     raceCar.fuelLevel -= 1;
//   },

//   stopEngine() {
//     raceCar.engineOn = false;
//   },

//   refuel(percent) {
//     if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//       raceCar.fuelLevel += (percent / 100);
//     } else {
//       raceCar.fuelLevel = 1;
//     }
//   },
// };

// raceCar.refuel(30);
// console.log(raceCar.fuelLevel);




let person = {
  name: "John",
  age: 33,
};

let raceCar = {
  make: "BMW",
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};

raceCar.refuel(30);
console.log(raceCar.fuelLevel);
