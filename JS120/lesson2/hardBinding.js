// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// };

// let sumNum2 = sumNum.bind(obj);
// sumNum2(5);

// let object = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     return this.a + ' ' + this.b;
//   },
// };

// let bar = object.foo;
// console.log(bar());

// let baz = object.foo.bind(object);
// console.log(baz());

// let object2 = {
//   a: 'hi',
//   b: 'there',
// };

// console.log(baz.call(object2));

// let greetings = {
//   morning: "Good morning, ",
//   afternoon: "Good afternoon, ",
//   evening: "Good evening, ",

//   greeting: function(name) {
//     let currentHour = (new Date()).getHours();

//     if (currentHour < 12) {
//       console.log(this.morning + name);
//     } else if (currentHour < 18) {
//       console.log(this.afternoon + name);
//     } else {
//       console.log(this.evening + name);
//     }
//   }
// };

// let spanishWords = {
//   morning: "Buenos dias, ",
//   afternoon: "Beunas tardes, ",
//   evening: "Buenas noches, "
// };

// let spanishGreeter = greetings.greeting.bind(spanishWords);

// greetings.greeting("Brady");
// spanishGreeter('Jose');
// spanishGreeter('Juan');


// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo = foo.bind(obj);
// foo();


// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo());
// console.log(bar());


// let positivity = {
//   message: "JavaScript makes sense!",
// };

// let negativity = {
//   message: "JavaScript makes no sense!",
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage();


let obj = {
  a: 'Amazebulous',
};

let otherObj = {
  b: "That's not a real word",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);


