// [1, 2, 3].forEach(number => {
//   console.log(number);
// });


// [1, 2, 3].forEach(function(num, index) {
//   console.log(`${index}: ${num}`);
// });

// "hello".split("").forEach(function(letter) {
//   console.log(letter)
// });

// let produce = {
//   apple: "Fruit",
//   carrot: "Vegetable"
// }

// let produceValues = Object.entries(produce);

// produceValues.forEach(function(keyValue) {
//   let [key, value] = keyValue;

//   console.log(`${key} is a ${value}`)
// });


// let oddNumbers = [1, 2, 3].filter(function(num) {
//   return num % 2 === 1;
// });

// console.log(oddNumbers);

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceEntries = Object.entries(produce);
// let justVeggies = {};

// produceEntries.forEach(function(keyValue) {
//   let [key, value] = keyValue;
//   if (value === "Vegetable") {
//     justVeggies[key] = value;
//   }
// });

// console.log(justVeggies);

console.log([1, 2, 3].map(num => num * 2));


