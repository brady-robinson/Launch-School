// let numbers = [1, 3, 9, 11, 1, 4, 1];
// let ones = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 1) {
//     ones.push(numbers[i]);
//   }
// }

// console.log(ones)


// let fruits = ['apple', 'banana', 'pear'];
// let transformedFruits = [];
// let counter = 0;

// while (counter < fruits.length) {
//   currFruit = fruits[counter];
//   currFruit = currFruit + "s";
//   transformedFruits.push(currFruit);
//   counter += 1;
// }

// console.log(transformedFruits);


// function findVowels(string) {
//   let vowelString = '';

//   for (let i = 0; i < string.length; i++) {
//     let currLetter = string[i];

//     if ("aeiouAEIOU".includes(currLetter)) {
//       vowelString += currLetter;
//     }
//   }

//   return vowelString;
// }

// console.log(findVowels('the quick brown fox'));

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(fruitObj) {
//   let fruitKeyedObj = {};
//   let inputKeys = Object.keys(fruitObj);

//   for (let i = 0; i < inputKeys.length; i++) {
//     let currKey = inputKeys[i];
//     if (fruitObj[currKey] === "Fruit") {
//       fruitKeyedObj[currKey] = "Fruit";
//     }
    
//   }
//   return fruitKeyedObj;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


// function doubleNumbers(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] * 2
//   }
// }

// let numbers = [1, 2, 3];
// doubleNumbers(numbers);
// console.log(numbers);


// function doubleNumbers(numbers) {
//   let doubledNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 1) {
//       doubledNumbers.push(numbers[i] * 2)
//     } else {
//       doubledNumbers.push(numbers[i])
//     }
//   }

//   return doubledNumbers;
// }

// let numbers = [1, 2, 3];
// console.log(doubleNumbers(numbers));

function multiply(array, multiplier) {
  let multipliedArray = [];

  for (let i = 0; i < array.length; i++) {
    multipliedArray.push(array[i] * multiplier);
  }

  return multipliedArray;
}

console.log(multiply([1, 2, 3], 3));
