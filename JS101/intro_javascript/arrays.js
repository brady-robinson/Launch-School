// const myArray = Object.freeze(['school', 'work', 'house']);

// // console.log(myArray[myArray.length - 1])

// myArray[myArray.length] = 'pantry'
// console.log(myArray[myArray.length - 1]);
// myArray.push('kitchen');


// let myArray = ['school', 'work', 'house'];

// // console.log(myArray[myArray.length - 1])

// myArray[myArray.length] = 'pantry'
// myArray.push('kitchen');
// myArray.push('bedroom', 'door');
// myArray.pop()

// console.log(myArray);


// let myArray = ['school', 'work', 'house'];

// // console.log(myArray[myArray.length - 1])

// myArray[myArray.length] = 'pantry'
// myArray.concat('kitchen');
// myArray.concat('bedroom', 'door');

// console.log(myArray);



// let myArray = ['school', 'work', 'house'];

// // console.log(myArray[myArray.length - 1])

// myArray[myArray.length] = 'pantry'
// myArray.push('kitchen');
// myArray.push('bedroom', 'door');
// console.log(myArray);
// myArray.splice(2,2);

// console.log(myArray);


// let array = [1, 2, 3];

// array.forEach(function(num) {
//   console.log(num);
// });

// array.forEach(num => console.log(num));


// let array = [1, 2, 3];

// let arraySquare = array.map(num => (num * num));
// console.log(arraySquare)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
// console.log(numbers.filter(num => num > 4));


// let array = [1, 2, 3];
// let arrayReduced = array.reduce((accumulator, element) => accumulator + element, 0);

// console.log(arrayReduced);


// let array = ['a','b','c'];

// let arrayReduced = array.reduce((accumulator, element) => {
//   return accumulator + element.toUpperCase()
// }, "");

// console.log(arrayReduced);


// let a = new Array(3);
// console.log(a)
// console.log(a[0] === undefined);
// let aKeys = Object.keys(a);
// console.log(a.length);
// console.log(aKeys.length);

// let b = [];
// b.length = 3;
// console.log(b);
// console.log(b[0] === undefined);
// let bKeys = Object.keys(b);
// console.log(b.length);
// console.log(bKeys.length);

// let c = [undefined, undefined, undefined];
// console.log(c);
// console.log(c[0] === undefined);
// let cKeys = Object.keys(c);
// console.log(c.length);
// console.log(cKeys.length);


// console.log([1, 2, 3] === [1, 2, 3]);

// let a = [1,2,3];
// let b = a;
// console.log(a === b);


// let a = [1, 5, 3, 4, 2];
// console.log(a.includes(3));
// console.log(a.includes(10));
// a.sort();
// console.log(a);


// let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];
// console.log(fruits.slice(1, 3));
// console.log(fruits.slice(3));
// console.log(fruits.slice());
// fruits.reverse();
// console.log(fruits);


// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// myArray.forEach(function(num) {
//   if(num % 2 === 0) console.log(num);
// })


// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// let even_nums = [];

// myArray.forEach(function(inner) {
//   current_even_nums = inner.filter(num => (num % 2 === 0));
//   even_nums = even_nums.concat(current_even_nums);
// })

// console.log(even_nums);


// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let myArray2 = myArray.map(function(num) {
//   if(num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// })

// console.log(myArray2);

// function findIntegers(input_array) {
//   let int_array = input_array.filter(function(el) {
//     if(typeof el === "number" && Number.isInteger(el)) {
//       return el;
//     }
//   })
//   return int_array;
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

// function oddLengths(input_array) {
//   let new_array = input_array.map(function(string) {
//     return string.length;
//   });
//   return new_array.filter(num => num % 2 !== 0);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(input_array) {
//   return input_array.reduce((accumulator, element) => accumulator + (element*element), 0);
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// function oddLengths(input_arr) {

// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function containsThree(input_array) {
//   let threeArray = input_array.filter(num => num === 3);
//   if(threeArray.length > 0) {
//     return true;
//   }
//   return false;
// }

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(containsThree(numbers1));
// console.log(containsThree(numbers2));
// console.log(containsThree(numbers3));


let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
