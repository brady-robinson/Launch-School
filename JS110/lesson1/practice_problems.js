// console.log([1, 2, 3].filter(num => "hi"));

// console.log([1, 2, 3].map(num => {
//   return num * num;
// }));

// console.log([1, 2, 3].map(num => num * num));

// console.log(['ant', 'bear', 'caterpillar'].pop().length);


// console.log([1, 2, 3].every(num => {
//   return num = num * 2;
// }));


// let arr = [1, 2, 3, 4, 5];
// arr.fill(1, 1, 5);
// console.log(arr);


// console.log(['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// }));


// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let flintstonesObj = {};

// flintstones.forEach((name, idx) => {
//   flintstonesObj[name] = idx;
// });

// console.log(flintstonesObj);


// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesValues = Object.values(ages);
// let adder = 0;

// agesValues.forEach(num => adder += num);
// console.log(adder)

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let minAge = null;

// Object.values(ages).forEach(function(age) {
//   if (minAge === null) {
//     minAge = age;
//   } else if (minAge > age) {
//     minAge = age;
//   }
// });

// console.log(minAge);

// let agesValues = Object.values(ages);
// console.log(Math.min(...agesValues));

// let statement = "The Flintstones Rock";
// // let lettersArr = statement.replace(/ /g,"").split("");
// let lettersArr = statement.split("").filter(letter => letter !== " ");
// let countObj = {};

// lettersArr.forEach(function(letter) {
//   let countValues = Object.keys(countObj);

//   if (countValues.includes(letter)) {
//     countObj[letter] += 1;
//   } else {
//     countObj[letter] = 1;
//   }
// });

// console.log(countObj);

