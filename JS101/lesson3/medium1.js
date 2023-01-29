// let message = 'The Flintstones Rock!';

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// let munstersDescriptionArray = munstersDescription.split('')

// for (let counter = 0; counter < munstersDescription.length; counter++) {
//   if (munstersDescriptionArray[counter] === munstersDescriptionArray[counter].toUpperCase()) {
//     munstersDescriptionArray[counter] = munstersDescriptionArray[counter].toLowerCase()
//   } else {
//     munstersDescriptionArray[counter] = munstersDescriptionArray[counter].toUpperCase()
//   }
// }

// console.log(munstersDescriptionArray.join(''))


// function factors(number) {
//   if (number <= 0) {
//     return 'Number must be greater than 0.';
//   }

//   let divisor = number;
//   let factors = [];

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//     }
//     divisor -= 1;
//   }

//   return factors.sort(function(a,b){return a-b});
// }

// console.log(factors(10));

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);


let nanArray = [NaN];
console.log(Number.isNaN(nanArray[0]));




