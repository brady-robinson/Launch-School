// Global scope

// let name = "Julian";
// console.log(name);

// Local scope: function scope

// rule 1: outer scope variables can be accessed by inner scope

// let a = 1;

// function logA() {
//   console.log(a);
//   a += 1;
// }

// logA();
// console.log(a);

// rule 2: inner scope variables cannot be accessed by outer scope

// function aFunc() {
//   let a = 1;
// }

// aFunc();
// console.log(a)

// rule 3: peer scopes do not conflict

// function funcA() {
//   let a = 'hello';
//   console.log(a);
// }

// function funcB() {
//   console.log(a);
// }

// funcA();
// funcB();

// rule 4: nested functions have their own variable scope

// let a = 1;

// function foo() {
//   let b = 2;

//   function bar() {
//     let c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }

//   bar();

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// foo();

// function logElements(array) {
//   array.forEach(function(element) {
//     console.log(element);
//   });
// }

// logElements([1,2,3]);

// rule 5: inner scope variables can shadow outer scope variables



