// let arr = [2,4,6];
// arr[-3] = 1;
// arr['foo'] = 'bar';

// console.log(arr);
// console.log(arr.length);
// console.log(Object.keys(arr));

// arr = arr.map(el => el + 1);

// console.log(arr);


let arr = [2,4,6];
arr.length = 8;
arr[4] = undefined;
console.log(arr);
console.log(arr.length);
console.log(Object.keys(arr));
console.log(arr[2]);
console.log(arr[4]);