// function greetings(name, job) {
//   let joinedName = name.join(" ");
//   let joinedJob = Object.values(job).join(" ");
//   return `Hello, ${joinedName}! Nice to have a ${joinedJob} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );

// let readlineSync = require("readline-sync");

// let name = readlineSync.question("What is your name? ")

// if (name.includes("!")) {
//   name = name.replace("!", "");
//   return console.log(`HELLO, ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   return console.log(`Hello, ${name}.`);
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(num) {
//   return multiply(num, num);
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// let readlineSync = require("readline-sync");

// let num1 = Number(readlineSync.question("Enter the first number: "));
// let num2 = Number(readlineSync.question("Enter the second number: "));

// console.log(`${num1} + ${num2} = ${num1+num2}`);
// console.log(`${num1} - ${num2} = ${num1-num2}`);
// console.log(`${num1} * ${num2} = ${num1*num2}`);
// console.log(`${num1} / ${num2} = ${Math.floor(num1/num2)}`);
// console.log(`${num1} % ${num2} = ${num1%num2}`);
// console.log(`${num1} ** ${num2} = ${num1**num2}`);

// function penultimate(string) {
//   let splitString = string.split(" ");
//   return splitString[splitString.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true


// function xor(arg1, arg2) {
//   if (arg1 && arg2) {
//     return false;
//   } else if (arg1) {
//     return true;
//   } else if (arg2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true


// function oddities(arr) {
//   return arr.filter((num, idx) => idx % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []


// function generateAge() {
//   let age = 0;

//   while (age < 20) {
//     age = Math.floor(Math.random() * 120);
//   }

//   return `Teddy is ${age} years old!`;
// }


// console.log(generateAge());

// let readlineSync = require('readline-sync');

// function retirement() {
//   let age = Number(readlineSync.question("What is your age? "));
//   let retirementAge = Number(readlineSync.question("At what age would you like to retire? "));

//   return `It's 2023. You will reture in ${2023 + (retirementAge - age)}.\nYou have only ${retirementAge-age} years to go!`
// }

// console.log(retirement());

// function centerOf(str) {
//   if (str.length % 2 === 0) {
//     return str.slice(Math.floor(str.length/2 - 1), Math.floor(str.length/2 + 1));
//   } else {
//     return str[Math.floor(str.length/2)];
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

function negative(int) {
  if (Math.abs(int) === int) {
    return int * -1;
  } else {
    return int;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

