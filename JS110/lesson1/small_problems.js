// function isOdd(integer) {
//   integer = Math.abs(integer);
//   return integer % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true


// for (let number = 2; number < 100; number+=2) {
//   console.log(number);
// }

// let readlineSync = require('readline-sync');
// let length = readlineSync.question("Enter the length of the room in meters: ");
// let width = readlineSync.question("Enter the width of the room in meters: ");
// console.log(`The room is ${length * width} square meters (${length*width*10.7639} square feet)`);


// let readlineSync = require('readline-sync');
// let billAmount = readlineSync.question("What is the bill? ");
// let tipPercent = readlineSync.question("What is the tip percentage? ");
// let tipAmount = Number(billAmount) * (Number(tipPercent)/100);
// let totalBill = Number(tipAmount) + Number(billAmount)

// console.log(`The tip is $${tipAmount}`);
// console.log(`The total is $${totalBill}`);


// let readlineSync = require('readline-sync');
// let integer = parseInt(readlineSync.question('Please enter an integer greater than 0: '))
// let type = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')

// let aggregate = 1
// for (let number = 1; number <= integer; number++) {
//   if (type === 's') {
//     aggregate += number;
//   } else if (type === 'p') {
//     aggregate *= number;
//   }
// }

// console.log(aggregate)


// function stringConcatter(string1, string2) {
//   if (string1.length > string2.length) {
//     return string2 + string1 + string2;
//   } else {
//     return string1 + string2 + string1;
//   }
// }

// console.log(stringConcatter('abc', 'defgh'));


// function isLeapYear(year) {
//   if (year < 1752) {
//     return year % 4 === 0;
//   }

//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(400));      // true
// console.log(isLeapYear(100));      // false
// console.log(isLeapYear(1));      // false
// console.log(isLeapYear(1752));      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true


// function multisum(num) {
//   let sumNum = 0;
//   for (let counter = 1; counter <= num; counter += 1) {
//     if (counter % 3 === 0 || counter % 5 === 0) {
//       sumNum += counter;
//     }
//   }
//   return sumNum;
// };

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168


// function utf16Value(string) {
//   let totalVal = 0;
//   for (let index = 0; index < string.length; index++) {
//     totalVal += string.charCodeAt(index)
//   }
//   return totalVal
// }


// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0





