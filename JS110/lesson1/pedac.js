// PEDAC process

// P: Understanding the Problem

// - Establish the rules / define the boundaries of the problem
//  - Assess available info about the problem
//  - Restate explicit requirements
//  - identify implicit requirements
//   - Explicit (in the description)
//   - Implicit (exrapolated)
// - Spend enough time. don't rush this step

// ** General Example **

// Given a string, produce a new string with every other word removed

// - Explicit requirements:
//  - input: string
//  - output: new string
//  - Remove every other word from input string

// - Questions
//  - What do we mean by every other word?
//  - How do we define what word means in this context?
//     - Words are delimited by spaces

// E: Examples and data structures

// - can confirm/ refute assumptions
// - help to answer questions about implicit requirements
// - act as assertions which help to codify the rules and boundaries

// // D: Data structures

// - Help reason with data more logically
// - Help interact with data at implementation level
// - Thinking in data structures is part of overall problem solving process
// - Data structures closely linked to algorithms
//   - set of steps from input to output
//   - involves structuring the data in a certain way

// A: Algorithms
// C: Implementing a solution in code

// Sum even number rows

// Imagine a sequence of consecutive even integers beginning with 2.
// The integers are grouped in rows, with the first row containing
// one integer, the second row two integers, the third row three
// integers, and so on. Given an integer representing the number of a
// particular row, return an integer representing the sum of all
// the integers in that row.

// - sequence of integers
// - sequence begins with 2
// - integers are consecutive
// - sequence is grouped into rows
// - each row is incrementally larger than the last: 1, 2, 3, ...
// - row "number" equals the number of elements in that row
//    - row 1 has 1 element, row 2 has 2 elements
// - input: single integer
//    - id's a row 
//    - that row is a subset of the sequence of integers
// - output: a single integer  
//    - the sum of the integers in the row id'd by the input integer 

// - Sequence:
// 2, 4, 6, 8, 10, 12, 14, 16, 18, ...
// 2
// 4,6
// 8,10,12
// 14,16,18,20
// ...

// - How do we create the structure

// Examples and test cases

// row number: 1 --> sum of integers in row: 2
// row number: 4 --> sum of integers in row: 68

// 2 --> 2
// 4,6 --> 10
// 8,10,12 --> 30
// 14,16,18,20 --> 68


// Data structures

// 2
// 4,6
// 8,10,12
// 14,16,18,20

// - overall structure represents a sequence
// - individual rows within overall structure 
// - individual rows in a set order in context of sequence
// - indvidual rows contain integers
// - can assume that integers are in set order in the context of the sequnce

// [
//   [2],
//   [4, 6],
//   [8, 10, 12]
// ]

// Algorithm

// - GET an integer as input
// - Set input integer to ROW NUMBER
// - INITIALIZE the INTEGER counter at 2
// - INITIALIZE the ELEMENT PER ROW counter to 1
// - INITIALIZE an empty array as OUTER ARRAY
// - FOR row from 0 to ROW NUMBER - 1:
//    - INITIALIZE an empty SUB ARRAY
//    - for counter until we reach ELEMENT PER ROW COUNTER - 1
//       - PUSH INTEGER counter to SUB ARRAY
//       - add 2 to INTEGER counter
//     - PUSH SUB ARRAY to OUTER ARRAY
//     - INCREMENT ELEMENT PER ROW COUNTER
// - Get the ROW NUMBER - 1 element of OUTER ARRAY
//   - INITIALIZE A SUM to 0
//   - FOR NUM in ROW:
//     - ADD NUM to SUM

// CODE

function makeSequence(rowNumber) {
  let integerElement = 2;
  let elementPerRow = 1;
  let outerArr = [];

  for (let counter = 0; counter < rowNumber; counter++) {
    let subArray = [];
    for (let counter2 = 0; counter2 < elementPerRow; counter2++) {
      subArray.push(integerElement);
      integerElement += 2;
    }
    outerArr.push(subArray);
    elementPerRow += 1;
  }
  return outerArr;
}

function sumRow(rowNumber, sequence) {
  let rowIndex = rowNumber - 1;
  let row = sequence[rowIndex];
  let sum = 0;

  for (let counter = 0; counter < row.length; counter++) {
    sum = sum + row[counter];
  }

  return sum;
}

function sumSequenceRow(rowNumber) {
  let sequence = makeSequence(rowNumber);
  let sum = sumRow(rowNumber, sequence);
  return sum
}

console.log(sumSequenceRow(4));



// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// input: a string
// output: array containing all sub-string palindromes of input string
// assumptions: case matters, empty string return empty array,
// no palindromes return empty array, only non-numeric characters in input

// pseudocode for the whole problem

// define a substringPalindromes function
// takes in a string and inputs string to substrings function
// substrings function returns array of substrings
// array of substrings input to the isPalindrome function
// iterate over each substring, inputting each to isPalidrome
// for each substring that isPalindrome, append to output array

// substring code

// function substrings(string) {
//   let substrings = [];
//   for (let index1 = 0; index1 < string.length - 1; index1++) {
//     for (let index2 = index1+1; index2 <= string.length; index2++) {
//       curr_substring = string.slice(index1, index2);
//       if (curr_substring.length > 1) {
//         substrings.push(curr_substring);
//       }
//     }
//   }
//   return substrings;
// }

// // palindrome code

// function isPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

// // console.log(substrings("rollo"));

// function substringPalindromes(string) {
//   let substringsArr = substrings(string);
//   let palindromeSubstringArr = [];

//   for (let counter = 0; counter < substringsArr.length; counter++) {
//     if (isPalindrome(substringsArr[counter])) {
//       palindromeSubstringArr.push(substringsArr[counter])
//     }
//   }
//   return palindromeSubstringArr;
// }

// console.log(substringPalindromes("rollo"));





