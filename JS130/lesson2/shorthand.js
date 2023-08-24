// function xyzzy(foo, bar, qux) {
//   return {
//     foo,
//     bar,
//     quz,
//   };
// }

// let obj = {
//   foo() {

//   },

//   bar(arg1, arg2) {

//   },
// }

// let obj = {
//   foo: "foo",
//   bar: "bar",
//   qux: 42,
// };

// let { foo, bar, qux } = obj;

// function xyzzy({foo, bar, qux}) {
//   console.log(qux);
//   console.log(bar);
//   console.log(foo);
// }

// let obj = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// }

// xyzzy(obj);

// let foo = [1, 2, 3];
// let [ first, second, third ] = foo;
// console.log(second);

// let one = 1;
// let two = 2;
// let three = 3;

// let [ num1, num2, num3 ] = [one, two, three];

// console.log(num2);

// let one = 1;
// let two = 2;
// let three = 3;

// [ three, one ] = [one, two];

// console.log(three);

// let foo = [1, 2, 3, 4];
// let [ bar, ...qux] = foo;
// console.log(bar);
// console.log(qux);

// function add3(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// let foo = [3, 7, 11];
// console.log(add3(...foo));

// let foo = [1, 2, 3];
// let qux = [4, 5, 6];
// let bar = [...foo];
// let xyz = [...foo,10,...qux]
// console.log(bar);
// console.log(xyz);

// let foo = {qux:1, baz: 2};
// let xyz = {baz:3, sup: 5};
// let obj = {...foo, ...xyz};

// let foo = [1, 2, 3, 4];
// let [ bar, ...otherStuff ] = foo;
// console.log(bar);
// console.log(otherStuff);

// function maxItem(first, ...moreArgs) {
//   let max = first;
//   moreArgs.forEach(value => {
//     if (value > max) {
//       max = value;
//     }
//   })

//   return max;
// }

// console.log(maxItem(3,2,7,9,1,2));

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux
//   }
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// function product(numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product([2, 3, 4, 5]);

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const first = obj.first;
// const second = obj.second;
// const rest = {third: obj.third, rest: obj.rest};

// const arr = [1, 2, 3];
// const obj = { a: 'a', b: 'b', c: 'c' };

// let [first, second, third] = arr;
// let {a, b, c} = obj;

// console.log(second)

// const arr = [1, 2, 3];
// let [first, ...arr2] = arr;
// console.log(first);
// console.log(arr2);

// const arr = [1, 2, 3];
// let [,second,] = arr
// console.log(second);

// const obj = { a: 'a', b: 'b', c: 'c' };
// let {c: tail, ...obj2} = obj;
// console.log(obj2);
// console.log(tail);

// function sum(...nums) {
//   return nums.reduce((acc, currVal) => acc + currVal);
// }

// let val = sum(...[1, 2, 3, 4]);
// console.log(val);

// const arr = [1, 2, 3];

// function prod(num1, num2) {
//   return num1 * num2;
// }

// let out = prod(...arr);
// console.log(out);

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

console.log(obj2);
console.log(obj3);
