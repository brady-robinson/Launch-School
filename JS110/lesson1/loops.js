// let arr = [1, 2, 3, 4, 5];

// count = 0;
// while (count < arr.length) {
//   arr[count] += 1;
//   count += 1;
// }

// console.log(arr);


// while (true) {
//   console.log("hello");
//   break;
// }


// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log("yay");
//     break;
//   }
// }


// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// // let counter = 0;

// // while (counter < alphabet.length) {
// //   console.log(alphabet[counter]);
// //   counter += 1;
// // }

// for (let counter = 0; counter < alphabet.length; counter++) {
//   console.log(alphabet[counter])
// }


// let colors = ['red', 'green', 'blue'];

// for (let counter = 0; counter < colors.length; counter++) {
//   console.log(`Next color is ${colors[counter]}!`)
// }


// let mixed = ['hello' , 10, undefined];
// for (let counter = 0; counter < mixed.length; counter++) {
//   console.log(typeof mixed[counter]);
// }


// let pets = {fish: 2, dogs: 3};

// let petsKeys = Object.keys(pets);
// let counter = 0;

// for (let counter = 0; counter < petsKeys.length; counter++) {
//   console.log(`I have ${pets[petsKeys[counter]]} ${petsKeys[counter]}`)
// }


// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// for (let currentPet in numberOfPets) {
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`)
// }

// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log("yay");
//     break;
//   }
// }

// let number;

// do {
//   number = Math.floor(10 * Math.random());
//   console.log(number);
// } while (number !== 5);

// console.log("yey");

// let str = '';

// while (true) {
//   if (str.length > 10) {
//     break;
//   }

//   str += "*";
//   console.log(str);
// }


// let str = '';

// while (str.length < 10) {
//   str += "*";
//   console.log(str);
// }


// let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
// let index = 0;

// while (index < names.length) {
//   if (names[index][0] === "E") {
//     break;
//   }

//   console.log(names[index]);
//   index += 1;
// }


let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let counter = 0; counter < numbers.length; counter++) {
  if (numbers[counter] % 2 === 1) continue;

  let square = numbers[counter] * numbers[counter];
  console.log(square);
}

