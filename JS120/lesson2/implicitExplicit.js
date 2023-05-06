// function foo() {
//   console.log("this referes to: " + this);
// }

// foo();



// function foo() {
//   this.bar = 'bar';
// }

// foo();
// console.log(global.bar);



// "use strict";

// function foo() {
//   console.log("this refers to: " + this);
// }

// foo();



// let foo = {
//   bar: function() {
//     console.log(this);
//   },
// }

// foo.bar();

// let baz = foo.bar;
// baz();



// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42,
// }

// logNum.call(obj);



// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42,
// }

// obj.logNum = logNum;
// obj.logNum();



// let obj1 = {
//   logNum() {
//     console.log(this.num);
//   }
// }

// let obj2 = {
//   num: 42
// }

// obj1.logNum.call(obj2);



// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// }

// obj.num = sumNum.call(obj, 5);
// console.log(obj.num);



// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// }

// obj.sumNum = sumNum;
// obj.num = obj.sumNum(5);
// console.log(obj.num);



// let iPad = {
//   name: 'iPad',
//   price: 40000,
// };

// let kindle = {
//   name: 'Kindle',
//   price: 30000,
// };

// function printLine(lineNumber, punctuation) {
//   console.log(`${lineNumber}: ${this.name}, ${this.price/100} dollars${punctuation}`);
// }

// printLine.call(iPad, 1, ";");
// printLine.call(kindle, 2, '.');



// function func() {
//   return this;
// }

// let context = func();

// console.log(context);



// let obj = {
//   func: function() {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context);



// message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage();

// let foo = {
//   message: 'Hello from the function scope!',
// }

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage();



let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo));

