// let counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }


// let names = ['Mary', 'Bob'];
// let upperNames = [];
// let counter = 0;

// while (counter < names.length) {
//   let upperName = names[counter].toUpperCase();
//   upperNames.push(upperName);
//   counter += 1;
// }

// console.log(upperNames)


// let names = ['Mary', 'Bob'];
// let upperNames = [];

// for (let counter = 0; counter < names.length; counter += 1) {
//   if (names[counter] === 'Mary') continue;

//   let upperName = names[counter].toUpperCase();
//   upperNames.push(upperName);
// }

// console.log(upperNames)

// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// names.forEach(function(name) {
//   console.log(name);
// })

// names.forEach(name => console.log(name));


// function factorial(n) {
//   if (n < 2) return n;
//   return factorial(n - 1) * n;
// }

// console.log(factorial(6));


// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');





