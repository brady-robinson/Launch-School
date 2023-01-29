// let advice = "Few things in life are as important as house training your important pet dinosaur.";
// advice = advice.replace(/important/g, "urgent")
// console.log(advice)


// let numbers = [1, 2, 3, 4, 5];
// numbersReversed = numbers.slice().reverse()
// console.log(numbers)
// console.log(numbersReversed)

// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(numbers)
// console.log(sortedArray)


// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;
// let number2 = 95;

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));


// let famousWords = "seven years ago...";
// famousWords2 = "Four score and " + famousWords;
// famousWords3 = "Four score and ".concat(famousWords);

// console.log(famousWords2)
// console.log(famousWords3)


// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);
// console.log(numbers);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// flintstones = flintstones.flat()
// console.log(flintstones)

// let flintstones = ["Fred", "Wilma"];
// flintstones = flintstones.concat(["Barney", "Betty"]);
// flintstones = flintstones.concat(["Bambam", "Pebbles"]);
// console.log(flintstones)


// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let flintstonesArray = Object.entries(flintstones)
// let singleBarney;
// flintstonesArray.forEach(element => {
//   if (element[0] === 'Barney') {
//     singleBarney = element;
//   }
// })
// console.log(singleBarney)


// let numbers = [1, 2, 3, 4];
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

// console.log(Array.isArray(numbers))
// console.log(Array.isArray(table))


// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);
// title.padStart(padding + title.length);


let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
count = statement1.split('').filter(char => char === 't').length;
console.log(count);



