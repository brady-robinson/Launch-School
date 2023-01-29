// let numbers = [1, 2, 3, 4];
// let counter = 0;

// numbers.length = 0;

// numbers.splice(0, numbers.length)

// while (counter < numbers.length) {
//   numbers.pop();
// }

// while (counter < numbers.length) {
//   numbers.shift();
// }

// console.log(numbers);


// console.log([1, 2, 3] + [4, 5]);


// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);


// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);


// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

let validColors = ['blue', 'green'];

// function isColorValid(color) {
//   return (color === "blue" || color === "green")
// }

function isColorValid(color) {
  return (validColors.includes(color))
}


let returnVal = isColorValid('green');
console.log(returnVal);



 
