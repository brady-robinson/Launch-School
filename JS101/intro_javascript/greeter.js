let rlSync = require('readline-sync');

function greet(prompt, funct) {
  return funct.question(prompt);
}

let name1 = greet("What is your first name? ", rlSync);
let name2 = greet("What is your last name? ", rlSync);
console.log(`Hello, ${name1 + " " + name2}!`);