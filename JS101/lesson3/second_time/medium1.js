// for (let count = 0; count < 10; count++) {
//   console.log(" ".repeat(count) + "The Flintstones Rock!");
// }

// let munstersDescription = "The Munsters are creepy and spooky.";

// let swappedString = "";
// munstersDescription.split("").forEach(function(char) {
//   if (char === char.toUpperCase()) {
//     swappedString += char.toLowerCase();
//   } else {
//     swappedString += char.toUpperCase();
//   }
// });

// swappedString = munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// console.log(swappedString);

// let arr1 = [1, 2, 3, 4, 5];

// console.log(arr1.filter(num => num > 2))
// console.log(arr1.map(function(x) {
//   return x**2;
// }))

// let sumArr = arr1.reduce((accumulator, currVal) =>
//   accumulator + currVal, 0
// );

// console.log(sumArr);


function factors(number) {
  if (number <= 0) return "error";
  let divisor = number;
  let factors = [];


  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor)
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(10))


