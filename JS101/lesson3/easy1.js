// let numbers = [1,2,3];
// numbers[6] = 5;
// numbers[5] = undefined;
// numbers = numbers.map(x => x + 10);
// console.log(numbers);


// let str1 = "Comer over here!";
// let str2 = "What's up, Doc?";

// function endsWithExclamation(str) {
//   let lengthstr = str.length
//   if (str[lengthstr - 1] === "!") {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(endsWithExclamation(str1));
// console.log(endsWithExclamation(str2));
// console.log(str1.endsWith("!"));
// console.log(str2.endsWith("!"));


// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// let agesKeys = Object.keys(ages);
// let spotInAges = agesKeys.includes("Spot")
// console.log(spotInAges)
// console.log(ages.hasOwnProperty("Spot"));


// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// munstersDescription = munstersDescription.toLowerCase()
// munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1)
// console.log(munstersDescription)

// console.log(false == '0');
// console.log(false === '0');


// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 }
// let additionalAges = { Marilyn: 22, Spot: 237 }
// let agesToAdd = Object.entries(additionalAges)

// agesToAdd.forEach(element => {
//   key = element[0]
//   value = element[1]
//   ages[key] = value
// })

// console.log(ages)

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 }
// let additionalAges = { Marilyn: 22, Spot: 237 }
// Object.assign(ages, additionalAges);
// console.log(ages)


// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones)



