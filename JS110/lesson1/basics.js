// let str = "abcdefghi";
// console.log(str[2]);
// console.log(str.slice(2, 6))

// let str = 'The grass is green';
// console.log(str.slice(4, 9));
// console.log(str.slice(4));
// console.log(str.slice());
// console.log(str.slice(-8, -3));

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr[2]);
// console.log(arr.slice(1, 5));
// console.log(arr.slice());
// let arr2 = arr.slice();

// console.log(arr == arr2);
// console.log(arr === arr2);

// arr2.push('h');
// console.log(arr);
// console.log(arr2);


// let obj = { fruit: 'apple', vegetable: 'carrot' };
// console.log(obj.fruit);
// console.log(obj.fruit[4]);
// console.log(obj["vegetable"]);
// console.log(obj["vegetable"][5]);


// let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
// console.log(obj);

// let string = "abcde";
// let array = ['a', 'b', 'c', 'd', 'e'];
// console.log(string[2]);
// console.log(array[2]);
// console.log(string[5]);
// console.log(array[5]);
// console.log(string[-2]);
// console.log(array[-2]);


// let obj = {a: 'foo', b: 'bar', c: undefined};
// console.log(obj.c)
// console.log(obj.d)

// console.log(obj.hasOwnProperty('a'))
// console.log(obj.hasOwnProperty('c'))
// console.log(obj.hasOwnProperty('d'))

// console.log(Object.keys(obj).includes('a'))
// console.log(Object.keys(obj).includes('c'))
// console.log(Object.keys(obj).includes('d'))


// let arr = ['foo', 'bar', 'qux'];
// arr['boo'] = 'hoo';
// arr[-1] = 374;
// console.log(arr);
// console.log(arr.length);
// arr.forEach(element => console.log(element));
// console.log(Object.keys(arr));
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// console.log('this is a string'.split());
// console.log('this is a string'.split(''));
// console.log('this is a string'.split('')[0]);
// console.log('this is a string'.split(' '));
// console.log('apples, mangos, peaches'.split(','));
// console.log('apples, mangos, peaches'.split(',').join(""));
// console.log('apples, mangos, peaches'.split(',').join());

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.join(""))

// let obj = {hey: 'yes', bye: 'no'};
// console.log(Object.entries(obj));


// let numbers = [1, 2, 3, 4];
// // numbers[0] = numbers[0] + 1;

// for (let count = 0; count <= 4; count++) {
//   numbers[count] += 1;
// }

// console.log(numbers);


// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }

// obj['apple'] = 'Fruit';
// obj.carrot = 'Vegetable';
// console.log(obj);
// obj.pear = 'Fruit';
// obj.broccoli = 'Vegetable';
// console.log(obj);


str = 'bob';
str[0] = 'B';
console.log(str)

str2 = str[0].toUpperCase() + str.slice(1);
console.log(str2);






