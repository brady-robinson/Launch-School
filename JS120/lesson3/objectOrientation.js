// function makeVehicle(fuel, mpg) {
//   return {
//     fuel: fuel,
//     mpg: mpg,
//     range() {
//       return this.fuel * this.mpg;
//     },
//   };
// }

// let smallCar = makeVehicle(7.9, 37);
// console.log(smallCar.range());

function makeTool(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log("Price must be a positive number.");
      } else {
        this.price = newPrice;
      }
    },
    describe() {
      ['id','name','stock','price'].forEach((prop) => {
        console.log(`=> ${prop}: ${this[prop]}`)
      });
    }
  };
}

let scissors = makeTool(0, 'Scissors', 8, 10);
let drill = makeTool(1, 'Cordless Drill', 15, 45);
console.log(drill.price);
drill.setPrice(-99);
console.log(drill.price);
scissors.describe();