// function createCar (make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     started: false,

//     start() {
//       this.started = true;
//     },

//     stop() {
//       this.started = false;
//     },
//   };
// }

// let a = {
//   foo: 1,
//   bar: 2,
// };

// let b = Object.create(a);
// console.log(b.foo);

// console.log(a.hasOwnProperty('foo'));
// console.log(b.hasOwnProperty('foo'));

// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(b));

// let a = {
//   foo: 1,
//   bar: 2,
// };

// let b = {wah: 10, why: 11};

// Object.setPrototypeOf(b, a);
// console.log(b.foo);

// a.foo = 45;
// console.log(b.foo);

// a.baz = 12;
// console.log(b.baz);


// for (key in b) {
//   console.log(key);
// }

// let bKeys = Object.keys(b);
// console.log(bKeys);

// for (i = 0; i < bKeys.length; i++) {
//   console.log(bKeys[i]);
// }


// let a = {
//   foo: 1,
// };

// let b = {
//   bar: 2,
// };

// let c = {
//   baz: 3,
// };

// Object.setPrototypeOf(b, a);
// Object.setPrototypeOf(c, b);

// console.log(c.foo);
// console.log(c.bar);


// let a = {
//   foo: 1,
// };

// let b = {
//   bar: 2,
// };

// Object.setPrototypeOf(b, a);

// let c = Object.create(b);

// console.log(c.foo);
// console.log(c.hasOwnProperty('foo'));


// c.foo = 42;

// console.log(c.foo);
// console.log(a.foo);

// console.log(c.hasOwnProperty('foo'));


// let a = Object.create(null);
// console.log(Object.getPrototypeOf(a));


// function assignProperty(obj, prop, val) {
//   if (obj[prop] === undefined) {return undefined};
//   let proto = obj;

//   while (true) {
//     if (!proto.hasOwnProperty(prop)) {
//       proto = Object.getPrototypeOf(proto);
//     } else {
//       break;
//     }
//   }
//   proto[prop] = val;
// }

// let fooA = { bar: 1 };
// // console.log(Object.getPrototypeOf(fooA));
// let fooB = Object.create(fooA);
// // console.log(Object.getPrototypeOf(fooB));
// let fooC = Object.create(fooB);
// // console.log(Object.getPrototypeOf(fooC));

// // fooC["bar"] = 2;

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar);
// console.log(fooC.bar);

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux);
// console.log(fooC.qux);
// console.log(fooA.hasOwnProperty("qux"));
// console.log(fooC.hasOwnProperty("qux"));


// let wah = {whoah: 10};
// let foo = Object.create(wah);
// foo.bar = 1;
// foo.qux = 2;

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// })

let foo = Object.create(null);

if (Object.getPrototypeOf(foo)) {
  console.log("has prototype");
} else {
  console.log("doesn't have prototype")
}
