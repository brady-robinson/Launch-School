let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you? "));
let futureAges = [10, 20, 30, 40];
console.log(`You are ${age} years old.`);

for(let i = 0; i < futureAges.length; i += 1) {
  console.log(`In ${futureAges[i]} years, you will be ${age + futureAges[i]} years old.`);
}
