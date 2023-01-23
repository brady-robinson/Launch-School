// // pass by value

// function changeName(name) {
//   name = 'Bob';
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name); // logs Jim not Bob
// }

// anotherFunction();

// // pass by reference

// function capitalize(names) {
//   for (let index = 0; index < names.length; index++) {
//     names[index] = names[index][0].toUpperCase() + names[index].slice(1);
//   }
// }

// let names = ['chris', 'kevin', 'naveed'];
// capitalize(names);
// console.log(names);

// // primitive values are treated as pass by value

// function cap(name) {
//   name.toUpperCase();
// }

// let myName = 'naveed';
// cap(myName);
// console.log(myName);

// destructive methods mutate the caller

// function addNames(arr, name) {
//   arr.push(name);
// }

// let names = ['bob', 'kim'];
// addNames(names, 'jim');
// console.log(names);

// reassignment not destructive

// function addName(arr, name) {
//   arr = arr.concat([name]);
// }

// let names = ['bob', 'kim']
// addName(names, 'jim')
// console.log(names)

// push method is destructive

// function addName(arr, name) {
//   arr = arr.push(name);
// }

// let names = ['bob', 'kim']
// addName(names, 'jim')
// console.log(names)

// function foo(number) {
//   return number;
// }

// let number = 1;
// let newNumber = foo(number);
// console.log(number);
// console.log(newNumber);

// number = 3;
// console.log(number);
// console.log(newNumber);

// function bar(array) {
//   return array;
// }

// let array = [1, 2, 3];
// let newArray = bar(array);
// console.log(array == newArray);

// array.push(4);
// console.log(array);
// console.log(newArray);

// variable assignment

// let number = 1;
// newNumber = number;

// let arr = [1, 2, 3];
// newArr = arr;

// let word = 'Hello';
// let param = word;

// param = 'Goodbye';
// console.log(word);

// let word = 'Hello';

// function myFunc(param) {
//   param = 'Goodbye';
// }

// myFunc(word);
// console.log(word)

// let word = 'Hello';
// let param = word;

// param = 'Goodbye';
// word = param;

// console.log(word);

// let word = 'Hello';

// function myFunc(param) {
//   param = 'Goodbye';
//   return param;
// }

// myFunc(word);
// word = myFunc(word);
// console.log(word);

// Assignment to reference types

// let colors = ['red', 'green', 'blue'];
// let param = colors;

// param.push('yellow');

// console.log(colors);

// let colors = ['red', 'green', 'blue'];

// function myFunc(param) {
//   param.push('yellow');
// }

// myFunc(colors);
// console.log(colors);

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);






