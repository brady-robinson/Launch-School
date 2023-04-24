// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// input: array of numbers
// output: array of numbers

// Data sctructures: arrays

// Algorithm:
// INTILIAZE the OUTPUT ARRAY to an empty array
// ITERATE over the input array with forEach
// FOR EACH element in the input array
// initialize a new TEMP ARRAY so that we can keep track it numbers we've visited
// initialize a COUNTER and assign it to 0
// ITERATE again over each element in the input array
// IF the number is less than current number, THEN increment counter by one
// UNLESS that number has already been seen
// PUSH the counter number to the OUTPUT ARRAY

// function smallerNumbersThanCurrent(inpArr) {
//   let outputArray = [];
//   inpArr.forEach((num) => {
//     let tempArray = [];
//     let counter = 0;
//     inpArr.forEach((numComp) => {
//       if (numComp < num && !tempArray.includes(numComp)) {
//         counter++;
//       }
//       tempArray.push(numComp);
//     })
//     outputArray.push(counter);
//   })
//   return outputArray;
// }

// // Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]





// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// input: array of integers
// output: null or an integer
// can there only be integers in the input?

// data structure: array

// Algorithm

// Section 1
// Get the five consecutive integers

// use slice to select five consecutive integers in an array
// RETURN null if the array length is less than 5

function fiveConsecutive(inpArr, startIndex) {
  if (inpArr.slice(startIndex, startIndex + 5).length < 5) {
    return false
  } else {
    return inpArr.slice(startIndex, startIndex + 5);
  }
}

//console.log(fiveConsecutive([1, 2, 3, 4, 5, -5], 1));

// Section 2
// return null if input less than five
// Sum the five consecutive integers
// save the sum of the five consecutive integers in an array
// loop through the possible sequences
// if fiveCons returns false, finish looping (use a while loop)

// function minimumSum(inpArr) {
//   if (inpArr.length < 5) return null;
//   let cont = true;
//   let start = 0;
//   let allSums = [];

//   while (cont) {
//     let curSum = fiveConsecutive(inpArr, start);
//     start++
//     if (curSum === false) {
//       cont = false
//     } else {
//       let sum = curSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//       allSums.push(sum);
//     }
//   }

//   return Math.min(...allSums);
// }

// // Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // The tests above should each log "true".





// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// input: string
// output: string with every second word's fourth letter uppercase

// Part 1: isolate every second word

// convert string to array
// use a for loop with the incremement set to +2

// function toWeirdCase(str) {
//   let strArr = str.split(" ");
//   for(let i = 1; i < strArr.length; i = i + 2) {
//     let currWord = strArr[i];
//     if (currWord.length > 3) {
//       let firstHalf = currWord.slice(0, 3);
//       let secondHalf = currWord.slice(3);
//       if (secondHalf.length > 1) {
//         let secondHalfArr = secondHalf.split("");
//         for (t = 0; t < secondHalfArr.length; t = t + 4) {
//           let currLetter = secondHalfArr[t]
//           currLetter = currLetter.toUpperCase();
//           secondHalfArr[t] = currLetter;
//         }
//         let uppSecondHalf = secondHalfArr.join("");
//         let newWord = firstHalf + uppSecondHalf;
//         strArr[i] = newWord;
//       } else {
//         let uppSecondHalf = secondHalf.toUpperCase();
//         let newWord = firstHalf + uppSecondHalf;
//         strArr[i] = newWord;
//       }
//     }
//   }
//   return strArr.join(" ");
// }

// // Part 2: isolate fourth letter and uppercase it

// // IF the word is at least four letters long, 
// // take the slice of letters 1-3, and 4 to end
// // then take the slice of the first letter of the second part + the rest
// // uppercase the first letter of the second part
// // reassign that element of the array to equal the new value
// // join the arr back into a string
// // return the new string

// // Examples:

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// // The tests above should print "true".d





// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// input: array
// output: array
// Will array always have more than one element?
// How do we handle two of the same number?

// algorithm:

// initialize the DIFF variable
// initialize the outputArr to save the two output numbers
// FOR EACH element of the INPUT ARRAY
// FOR EACH element again, compare element by element
// IF the two elements equal each other, CONTINUE to next iteration
// ELSE if it is the first iteration, save the difference
// ELSE if not first iteration, calculate difference
// IF difference is smaller than DIFF, then update DIFF and overwrite outputARR

function closestNumbers(inpArr) {
  let diff = "";
  let outputArr = [];

  inpArr.forEach((num) => {
    inpArr.forEach((compNum) => {
      if (num === compNum) {
        continue;
      } else if (diff == "") {
        diff = Math.abs(num - compNum);
        outputArr = [num, compNum]
      } else {
        let tempDiff = Math.abs(num - compNum);
        if (tempDiff < diff) {
          diff = tempDiff;
          outputArr = [num, compNum];
        }
      }
    })
  })
  return outputArr;
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]




