// let john = {
//   firstName: 'John',
//   lastName: 'Doe',

//   greetings() {
//     console.log(`hello, ` + this.firstName + " " + this.lastName);
//   }
// };

// john.greetings();
// let foo = john.greetings;
// foo();



// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'john',
//     lastName: 'doe',
//     greetings: function() {
//       console.log(`hello, ` + this.firstName + " " + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john);
// }

// foo();



// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function foo() {
//   let john = {
//     firstName: 'john',
//     lastName: 'doe',
//     greetings: function() {
//       console.log(`hello, ` + this.firstName + " " + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings.bind(john));
// }

// foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar();
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;

//     function bar() {
//       console.log(self.a + ' ' + self.b);
//     }

//     bar();
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {

//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.call(this);
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {

//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)

//     bar();

//     bar();
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {

//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     let qux = bar.bind(this);

//     qux();

//     qux();
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {

//     let bar = () => {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar();

//     bar();
//   },
// };

// obj.foo();


// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function () {
//       console.log('hello ' + this.firstName + ' ' + this.lastName);
//     });
//   },
// };

// john.greetings();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + self.a + ' ' + self.b);
//     });
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }.bind(this));
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(number => {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };

// obj.foo();


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     }, this);
//   },
// };

// obj.foo();



// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// let boundDesc = turk.getDescription.bind(turk)

// logReturnVal(boundDesc);


// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();


// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = () => {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a)


// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a)


// let foo = {
//   bar: 42,
//   qux() {
//     console.log("Pudding");
//   },
// };

// let baz = Object.create(foo);
// baz.qux()


// global.foo = 5;
// if (isFinite(foo)) {
//   let bar = 3;
//   xyz = 5;
//   console.log(bar);
// }

// console.log(global);


let obj = {
  foo() {
    return this;
  },
};

console.log(obj.foo());
