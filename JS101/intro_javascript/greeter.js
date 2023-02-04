let rlSync = require('readline-sync');

let name1 = rlSync.question("What is your first name? ");
let name2 = rlSync.question("What is your last name? ");
console.log(`Hello, ${name1 + " " + name2}!`);