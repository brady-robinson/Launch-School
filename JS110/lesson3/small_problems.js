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

function penultimate(string) {
  let splitString = string.split(" ");
  return splitString[splitString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true






