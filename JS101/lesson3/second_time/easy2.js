// let advice = "Few things in life are as important as house training your pet dinosaur.";
// advice = advice.replace("important", "urgent");
// console.log(advice);

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = numbers.slice();
// numbers2.reverse();
// console.log(numbers2); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers2 = [...numbers]
// numbers2.sort((num1, num2) => num2 - num1);
// console.log(numbers2); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(8))
// console.log(numbers.includes(95))

// let famousWords = "seven years ago...";
// let preFamWords = "Four score and ";

// console.log(preFamWords + famousWords);
// console.log(preFamWords.concat(famousWords));


// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(2, 1);
// console.log(arr1);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = flintstones.flat();
// console.log(flintstones);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let flintFam = Object.entries(flintstones).filter(subArr => subArr[0] === "Barney").shift();
// console.log(flintFam);


// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));


// let title = "Flintstone Family Members";
// let lengthTitle = title.length
// let startPoint = Math.floor((40 / 2) - (lengthTitle / 2))
// console.log(" ".repeat(startPoint) + title)


let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// function countLowerCaseT(string) {
//   let strArray = string.split("");
//   let count = 0;
//   strArray.forEach(letter => {
//     if (letter === "t") {
//       count += 1;
//     }
//   })
//   return count;
// }

// console.log(countLowerCaseT(statement1));
// console.log(countLowerCaseT(statement2));


console.log(statement1.split("").filter(char => char === "t").length);





