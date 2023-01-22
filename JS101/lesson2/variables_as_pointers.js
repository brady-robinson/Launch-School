// let myWord = 'Hello';
// let myOtherWord = myWord;

// console.log(myWord);
// console.log(myOtherWord); // different strings stored at different memory addresses

// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0];
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myWord);

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);