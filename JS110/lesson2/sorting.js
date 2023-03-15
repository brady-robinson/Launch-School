// let arr = [2, 11, 9, 4, 107, 21, 1];
// console.log(arr.sort());
// console.log(arr);

// let arr2 = ['c', 'a', 'e', 'b', 'd'];
// arr2.sort();
// console.log(arr2)

// let arr3 = ['arc', 'bat', 'cape', 'ants', 'cap'];
// arr3.sort();
// console.log(arr3);


// console.log("+".charCodeAt());
// console.log("3".charCodeAt());
// console.log("3" < "+");
// console.log("+" < "3");
// console.log("Z" < "a");


// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => {
//   console.log(a, b)
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// arr.sort((a, b) => b - a);

// console.log(arr);

// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a, b) => a.length - b.length);

// console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let valA = a.reduce((acc, currNum) => acc + currNum);
  let valB = b.reduce((acc, currNum) => acc + currNum);

  return valA - valB;
});

console.log(scores);

