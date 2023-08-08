// function filter(array, func) {
//   let filterArray = [];

//   for (let i = 0; i < array.length; ++i) {
//     if (func(array[i])) filterArray.push(array[i]);
//   }

//   return filterArray;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// function map(array, func) {
//   let mappedArray = [];

//   for (let i = 0; i < array.length; ++i) {
//     mappedArray.push(func(array[i]));
//   }

//   return mappedArray;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function reduce(array, func, acc) {
//   let index = 0;

//   if (acc === undefined) {
//     acc = array[0];
//     index = 1;
//   }

//   for (let i = index; i < array.length; ++i) {
//     acc = func(acc, array[i])
//   }

//   return acc;
// }

function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, [])
}

function map(array, func) {
  return array.reduce((mappedItems, value) => {
    mappedItems.push(func(value));
    return mappedItems;
  }, []);
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => number > 3, []));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// => ["Curly", "Larry", "Mo"]




