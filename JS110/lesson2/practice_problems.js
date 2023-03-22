// let arr = ['10', '11', '9', '7', '8'];

// let sortArr = arr.sort((a, b) => Number(b) - Number(a));

// console.log(sortArr);

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let sortBooks = books.sort((a, b) => Number(a.published) - Number(b.published));

// console.log(sortBooks);

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3])

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1]['third'][0])

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0])

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1['b'][1])

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0])


// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4
// console.log(arr1)

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4
// console.log(arr2)

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4
// console.log(obj2);



// let totalAge = 0

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let names = Object.keys(munsters);

// names.forEach(name => {
//   if (munsters[name]['gender'] === 'male'){
//     totalAge += munsters[name]['age'];
//   }
// });

// console.log(totalAge);

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let totalAge = 0;

// for (let name in munsters) {
//   if (munsters[name]['gender'] === 'male') {
//     totalAge += munsters[name]['age'];
//   };
// };

// console.log(totalAge);

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// for (let name in munsters) {
//   console.log(`=> ${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}`);
// }

// console.log(Object.entries(munsters));


// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(string => {
//     let vowelString = "";
//     let letters = string.split("");
//     letters.forEach(letter => {
//       if ("AEIOUaeiou".includes(letter)) {
//         vowelString += letter;
//       };
//     });
//     console.log(vowelString);
//   });
// });


// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let sortArr = arr.map(subArr => {
//   if (typeof subArr[0] === "string"){
//     return subArr.slice().sort();
//   } else {
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });

// console.log(arr);
// console.log(sortArr);


// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let sortArr = arr.map(subArr => {
//   if (typeof subArr[0] === "string") {
//     return subArr.slice().sort().reverse();
//   } else {
//     return subArr.slice().sort((a, b) => b - a);
//   }
// });

// console.log(arr);
// console.log(sortArr);


// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let incArr = arr.map(subDict => {
//   newDict = {};

//   for (let key in subDict) {
//     newDict[key] = subDict[key] + 1;
//   }

//   return newDict;
// });

// console.log(incArr);


// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let filtArr = arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0);
// });

// console.log(filtArr);


// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let sortArr = arr.sort((a, b) => {
//   let aSum = 0
//   let bSum = 0

//   a.forEach(num => {
//     if (num % 2 === 1) {
//       aSum += num;
//     }
//   });

//   b.forEach(num => {
//     if (num % 2 === 1) {
//       bSum += num;
//     }
//   });

//   if (aSum < bSum) {
//     return -1;
//   } else if (aSum > bSum) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(sortArr);


// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let transformArr = Object.values(obj).map(ob1 => {
//   if (ob1["type"] === "fruit") {
//     return ob1["colors"];
//   } else {
//     return ob1["size"];
//   }
// });

// console.log(transformArr);


// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let odd = (element) => element % 2 === 1;

// let filtArr = arr.filter(obj => {
//   let currVals = Object.values(obj);
//   let returnVal = true
//   currVals.forEach(arr => {
//     arr.forEach(num => {
//       if (num % 2 === 1) {
//         returnVal = false;
//       }
//     });
//   });
//   return returnVal
// });

// console.log(filtArr);


// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let outDict = {};

// arr.forEach(arr => {
//   outDict[arr[0]] = arr[1];
// });

// console.log(outDict);


function generateUUID() {
  let options = ["0", "1", '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
  let outUUID = "";

  while (outUUID.length < 8) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }
  outUUID += "-"

  while (outUUID.length < 13) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }
  outUUID += "-"

  while (outUUID.length < 18) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }
  outUUID += "-"

  while (outUUID.length < 23) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }
  outUUID += "-"

  while (outUUID.length < 28) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }
  outUUID += "-"

  while (outUUID.length < 41) {
    outUUID += options[Math.floor(Math.random()*options.length)];
  }

  return outUUID;
  
};

console.log(generateUUID());

