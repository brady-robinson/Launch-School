// function say() {
//   console.log("Hi!")
// }

function add(a, b) {
  function subtract(a,b) {
    return a - b;
  }

  a = subtract(a, b);

  return a + b;
}

let twoAndThree = add(2, 3);
console.log(twoAndThree)
let subtractTwoAndThree = subtract(2, 3);