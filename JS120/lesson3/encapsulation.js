// let overtime = 10;
// let baseSalary = 6000;
// let rate = 50;

// function computeWage(baseSalary, overtime, rate) {
//   return baseSalary + (overtime * rate);
// }

// let employee = {
//   overtime: 10,
//   baseSalary: 6000,
//   rate: 50,
//   computeWage() {
//     return this.baseSalary + (this.overtime  * this.rate);
//   },
// }

function makeEmployee(overtime, baseSalary, rate) {
  return {
    overtime: overtime,
    baseSalary: baseSalary,
    rate: rate,
    computeWage() {
      return this.baseSalary + (this.overtime * this.rate);
    }
  }
}

let employee1 = makeEmployee(10, 6000, 50);
console.log(employee1.computeWage());