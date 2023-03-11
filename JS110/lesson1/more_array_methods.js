// console.log([1, 2, 3].some(function(num) {
//   return num > 3;
// }));


// let animals = { a: 'ant', b: 'bear', c: 'cat' };

// console.log(Object.values(animals).some(function(key) {return key.length > 4}));

// console.log([1, 2, 3].every(num => num >= 1));

// let animals = { a: 'ant', b: 'bear', c: 'cat' };

// console.log(Object.values(animals).every(animal => animal.length > 2));

// console.log([1, 5, 2, 7, 9, 2].find(num => num > 6));
// console.log([1, 5, 2, 7, 9, 2].find(num => num > 9));

// console.log([1, 5, 2, 7, 9, 2].findIndex(num => num > 6));
// console.log([1, 5, 2, 7, 9, 2].findIndex(num => num > 9));


// let nums = [1, 2, 3];
// let reversedNums = nums.slice().reverse();
// console.log(nums);
// console.log(reversedNums);

let animals = { a: 'ant', b: 'bear', c: 'cat' };

console.log([1, 2, 3].includes(2));
console.log([1, NaN, 3].includes(NaN));
console.log(Object.values(animals).includes("cat"));
console.log(animals.hasOwnProperty("d"));
// console.log(animals.includes({a: 'ant'}));