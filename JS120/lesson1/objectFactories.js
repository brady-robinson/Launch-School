function createCar (make,  fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      if (this.engineOn === false) {
        console.log("Engine is off!")
      } else {
        this.fuelLevel -= 0.1;
      }
      
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((fuelLevel + (percent/100)) >= 1) {
        this.fuelLevel = 1;
      } else {
        this.fuelLevel += (percent / 100);
      }
    },
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.startEngine();
raceCar1.drive();
console.log(raceCar1.fuelLevel);

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();
console.log(raceCar2.fuelLevel);

let raceCar3 = createCar('Jaguar', 0.4, false);
raceCar3.startEngine();
raceCar3.drive();
console.log(raceCar3.fuelLevel);