// function crunch(str) {
//   let inpArr = str.split("");
//   let indicesToDelete = [];
//   let charsToKeep = [];

//   for (let i = 1; i < inpArr.length; i++) {
//     if (inpArr[i] === inpArr[i - 1]) {
//       indicesToDelete.push(i - 1);
//     }
//   }

//   inpArr.forEach((char, idx) => {
//     if (!indicesToDelete.includes(idx)) {
//       charsToKeep.push(char);
//     }
//   })

//   return charsToKeep.join("");
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


function logInBox(str) {
  let topLine = "+--";
  let topLine2 = "| ";
  let bottomLine2 = "| ";
  let targetLine = "| ";

  for (let i = 0; i < str.length; i++) {
    topLine += "-";
    topLine2 += " ";

  }

  topLine += "+";
  targetLine = targetLine + str + " |";
  topLine2 += " |";

  console.log(topLine);
  console.log(topLine2);
  console.log(targetLine);
  console.log(topLine2);
  console.log(topLine);
}

logInBox('');
