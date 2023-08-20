// function makeCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     console.log(count);
//   }
// }

// let counter = makeCounter();
// for (let i = 0; i < 20; ++i) {
//   counter();
// }

// let counter2 = makeCounter();
// for (let i = 0; i < 20; ++i) {
//   counter2();
// }

// function makeCounterLogger(num1) {
//   let firstNum = num1;
//   return function(num2) {
//     let secondNum = num2;
//     if (firstNum > secondNum) {
//       for (let i = firstNum; i >= secondNum; --i) {
//         console.log(i);
//       }
//     } else {
//       for (let i = firstNum; i <= secondNum; ++i) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(2);

// function makeList() {
//   let list = [];
//   return function(arg=undefined) {
//     if (arg == undefined && list.length > 0) {
//       list.forEach(item => console.log(item));
//     } else if(arg == undefined && list.length === 0) {
//       console.log("The list is empty.")
//     } else if (list.includes(arg)) {
//       let index = list.indexOf(arg);
//       list.splice(index, 1);
//       console.log(arg + " removed!")
//     } else if (!list.includes(arg)) {
//       list.push(arg);
//       console.log(arg + " added!")
//     }
//   }
// }

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();


function makeList() {
  let listItems = [];
  return {
    list: function() {
      if (listItems.length === 0) {
        console.log("List is empty.")
      } else {
        listItems.forEach(item => console.log(item));
      }
    },

    add: function(item) {
      listItems.push(item);
      console.log(item + " added!")
    },

    remove: function(item) {
      let index = listItems.indexOf(item);
      listItems.splice(index, 1);
      console.log(item + " removed!")
    }
  }
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();

