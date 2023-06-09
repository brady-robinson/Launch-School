// const Swimmable = {
//   swim() {}
// }

// const Flyable = {
//   fly() {}
// }

// class Stork {}
// Object.assign(Stork.prototype, Flyable)

// class Parrot {}
// Object.assign(Parrot.prototype, Flyable)

// class Penguin {}
// Object.assign(Penguin.prototype, Swimmable)

// class Ostrich {}
// Object.assign(Ostrich.prototype, Swimmable)

// class Duck {}
// Object.assign(Duck.prototype, Swimmable, Flyable)

// class Goose {}
// Object.assign(Goose.prototype, Swimmable, Flyable)


// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }
// Object.assign(Car.prototype, Speed)

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }
// Object.assign(Truck.prototype, Speed)

// let honda = new Car();
// let chevy = new Truck();

// honda.goFast();
// console.log('goFast' in honda)
// chevy.goFast();
// console.log('goFast' in chevy)

const RangeCalc = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  } 
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}
Object.assign(WheeledVehicle.prototype, RangeCalc)

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
Object.assign(Catamaran.prototype, RangeCalc)
