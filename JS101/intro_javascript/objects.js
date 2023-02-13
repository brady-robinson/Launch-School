// let person = {
//   name:    'Jane',
//   age:     37,
//   hobbies: ['photography', 'genealogy'],
// };

// person.height = '5 ft';
// person['gender'] = 'female';

// delete person.age;
// delete person['gender'];
// delete person['hobbies'];

// console.log(person)

// function hello() {
//   console.log("hey person");
// }

// hello();

// let greet = hello;
// greet();

// let hello = function() {
//   console.log("hey person");
// }

// hello();


// let bob = { name: 'Bob', age: 22 };
// let studentBob = Object.create(bob);
// studentBob.year = 'Senior';

// console.log(studentBob.name);


// let person = {
//   name:    'Jane',
//   age:     37,
//   hobbies: ['photography', 'genealogy'],
// };


// for (let prop in person) {
//   console.log(person[prop]);
// }


// let obj1 = {a: 1, b: 2};
// let obj2 = Object.create(obj1);
// obj2.c = 3;
// obj2.d = 4;

// for (let prop in obj2) {
//   if (obj2.hasOwnProperty(prop)) {
//     console.log(prop)
//   }
// }

// let obj1 = {a: 1, b: 2};
// let obj1Keys = Object.keys(obj1);

// obj1Keys.forEach(function(key) {
//   console.log(obj1[key]);
// })

// let obj1Values = Object.values(obj1);
// console.log(obj1Values);

// let obj1Entries = Object.entries(obj1);
// console.log(obj1Entries);


// let obj1 = {a: 1, b: 2};
// let obj2 = {c: 3, d: 4};
// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };

// console.log(person.name);


// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let objKeys = Object.keys(obj);

// for (let i = 0; i < objKeys.length; i += 1) {
//   objKeys[i] = objKeys[i].toUpperCase();
// }

// console.log(objKeys);


// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// function copyObj(objToCopy, elements=[]) {
//   if (elements.length === 0) {
//     return Object.assign({}, objToCopy)
//   };

//   let outputObj = {};
//   elements.forEach(key => {
//     outputObj[key] = objToCopy[key];
//   });

//   return outputObj;
// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }


// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606;
// console.log(obj);


// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// let bar = foo;

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"

let messages = ['welcome', 3.14, [1, 2, 3]];
function bar() {
  let current_message = messages.shift();
  return console.log(current_message);
} 

function foo(bar) {
  console.log(bar());
}

foo(bar);    // Should print 'Welcome'
foo(bar);    // Should print 3.1415
foo(bar);    // Should print [1, 2, 3]


