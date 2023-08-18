// let numbers = [1, 2, 3];

// function printNumbers() {
//   console.log(numbers);
// }

// printNumbers();

// numbers = [4, 5];
// printNumbers();

// printNumber();

// let number = 42;

// printNumber();

// function printNumber() {
//   console.log(number);
// }

// printNumber();

// number = 10;
// printNumber();

// function foo() {
//   let name = "Pete";
//   return function() {
//     console.log(name);
//   };
// }

// let printPete = foo();
// printPete();

// let counter = 0;

// function incrementCounter() {
//   counter += 1;
// }

// incrementCounter();
// incrementCounter();
// console.log(counter);

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// let incrementCounter2 = makeCounter();
// incrementCounter();
// incrementCounter();
// console.log(incrementCounter());

// console.log(incrementCounter2());

// function makeCounters() {
//   let counter = 0;

//   function fun1() {
//     counter += 1;
//     return counter;
//   }

//   function fun2() {
//     counter += 2;
//     return counter;
//   }

//   return [fun1, fun2];
// }

// let funs = makeCounters();
// let fun1 = funs[0];
// let fun2 = funs[1];
// console.log(fun1());
// console.log(fun2());

// let oddNumbers = [];
// let array = [1, 2, 3, 4, 5, 6, 7];
// array.forEach(number => {
//   if (number % 2 === 1) {
//     oddNumbers.push(number);
//   }
// });

// console.log(oddNumbers);

// function add(first, second) {
//   return first + second;
// }

// function addNumber(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   }
// }

// let addFive = addNumber(5);
// console.log(addFive(10));



// function makeCounter() {
//   let counter = 0;
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// let incremenetCounter1 = makeCounter();
// let incremenetCounter2 = makeCounter();

// console.log(incremenetCounter1());
// console.log(incremenetCounter1());

// console.log(incremenetCounter2());
// console.log(incremenetCounter2());

// function makeMultipleLister(integ) {
//   return function() {
//     for (let i = integ; i < 100; i += integ) {
//       console.log(i);
//     }
//   }
// }

// let lister = makeMultipleLister(17);
// lister();

// function makeAddSubtract(num) {
//   let total = num;

//   function add(amount) {
//     total += amount;
//     return total;
//   }

//   function subtract(amount) {
//     total -= amount;
//     return total;
//   }

//   return [add, subtract];
// }

// let addSubtract = makeAddSubtract(0);
// let add = addSubtract[0];
// let subtract = addSubtract[1];

// console.log(add(1));
// console.log(add(42));
// console.log(subtract(39));
// console.log(add(6));

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// function later2(func, arg1) {
//   return function(arg2) {
//     func.call(this, arg1, arg2);
//   }
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


"use strict";

function bind(context, func) {
  return func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

