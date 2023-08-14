// console.log(getName());

// function getName() {
//   return "brady"
// }

// console.log(foo);
// var foo = 2;
// console.log(foo);

// console.log(bar);
// let bar = 10;
// console.log(bar);

// console.log(qux);
// const quz = 99;

// function foo() {
//   bar();

//   function bar() {
//     console.log('hello');
//   }
// }

// foo();

// console.log(hello());

// var hello = function() {
//   console.log("hello");
// }

// let bar = 'hello';
// console.log(bar)
// bar();

// function bar() {
//   console.log("morning");
// }

// boo();

// function boo() {
//   console.log("Boo!");
// }

// var foo1 = 'hello';

// foo();

// function foo() {
//   console.log(foo1);
// }

// var foo = function() {
//   console.log("Bye");
// }

// var foo = function() {
//   console.log("Bye");
// }

// function foo() {
//   console.log("Hello");
// }

// foo();

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// bar();

// function bar() {
//   console.log("foo!");
// }

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

class Image {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

