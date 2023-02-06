// function say() {
//   console.log("Hi!")
// }

// function add(a, b) {
//   function subtract(a,b) {
//     return a - b;
//   }

//   a = subtract(a, b);

//   return a + b;
// }

// let twoAndThree = add(2, 3);
// console.log(twoAndThree)
// let subtractTwoAndThree = subtract(2, 3);

// function changeFirstElement(array) {
//   array[0] = 9;
// }

// let oneToFive = [1, 2, 3, 4, 5];
// changeFirstElement(oneToFive);
// console.log(oneToFive);


// function addToArray(array) {
//   return array.concat(10);
// }

// let oneToFive = [1, 2, 3, 4, 5];
// console.log(addToArray(oneToFive));
// console.log(oneToFive);


// greetPeople();

// function greetPeople() {
//   console.log('hey!')
// }


// let greetPeople = function () {
//   console.log("hey!")
// }

// greetPeople();


// let greetPeople = () => console.log("Good Morning!");
// greetPeople();

// let add = (a, b) => a + b;


// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar); // logs 1


// let bar = 1;
// function foo() {
//   bar = 2;
// }

// foo();
// console.log(bar);


// function multiply() {
//   let rlSync = require('readline-sync');
//   num1 = Number(rlSync.question('Enter the first number: '));
//   num2 = Number(rlSync.question('Enter the second number: '));
//   console.log(`${num1} * ${num2} = ${num1*num2}`)
// }

// multiply();


// function scream(words) {
//   words = words + '!!!!';
//   return;
//   console.log(words);
// }

// scream('Yipeee');


function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');




