// function() {
//   console.log("hello");
// }();

// (function() {
//   console.log("hello");
// })();

// (function(number) {
//   console.log(2 + number);
// })(2);

// (function() {
//   console.log("hello");
// })

// let foo = (function() {
//   return (function() {
//     return 10;
//   })() + 5;
// })();

// console.log(foo);

// let num = ((first, second) => first * second)(5, 6);
// console.log(num);

// const makeUniqueId = (function() {
//   let count = 0;
//   return function() {
//     ++count;
//     return count;
//   }
// })();

// makeUniqueId();
// makeUniqueId();
// makeUniqueId();
// console.log(makeUniqueId());

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);
// // sum += sum(numbers);  // ?

// (function(num) {
//   let startNum = num;
//   for (let start = startNum; start >= 0; --start) {
//     console.log(start);
//   }
// })(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo();

// let bar = (function(start) {
//   let prod = start;
//   return function(factor) {
//     prod *= factor;
//     return prod;
//   }
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

(function countdown(number) {
  if (number === 0) {
    console.log(0);
  } else {
    console.log(number);
    countdown(number - 1);
    
  }
})(7);
