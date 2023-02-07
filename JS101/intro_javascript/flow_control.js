// let a = prompt('Enter a number');

// if (a === '3') {
//   console.log("a is 3");
// } else if (a === '4') {
//   console.log("a is 4");
// } else {
//   console.log("a is neither 3, nor 4")
// }

// let foo = null;
// let bar = 'x';

// // let isOK = (foo || bar) ? true : false;
// // console.log(isOK);

// let isOK = !!(foo || bar);
// console.log(isOK);

// console.log(1 === 1 ? "this is true" : "this is not true");
// console.log(1 === 0 ? "this is true" : "this is not true");

// let message = 1 === 1 ? "this is true" : "this is not true";
// console.log(message);

// false || (true && false); // false
// true || (1 + 2); // true
// (1 + 2) || true; // 3
// true && (1 + 2); // 3
// false && (1 + 2); // false
// (1 + 2) && true; // true
// (32 * 4) >= 129; // false
// false !== !true; // false
// true === 4; // false
// false === (847 === '847'); // true
// false === (847 == '847'); // false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //

// let num = 10.01;

// function evenOrOdd(numero) {
//   if (parseInt(numero) !== numero) {
//     return console.log('input must be int')
//   }

//   if (numero % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

// evenOrOdd(num)


// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// let he = "the sun and the moon"

// function capIf10(inp_str) {
//   if (inp_str.length >= 10) {
//     return inp_str.toUpperCase();
//   } else {
//     return inp_str
//   }
// }

// console.log(capIf10(he))


function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`)
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`)
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`)
  } else {
    console.log(`${num} is greater than 100`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);



