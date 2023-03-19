// let arr = [[1, 3], [2]];
// arr[1] = "hi there";
// console.log(arr);

// arr[0][0] = 9;
// console.log(arr);

// arr[0].push(10);
// console.log(arr);


// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['b'] = 'boar';
// console.log(arr);

// let arr = ['a', 'b', 'c'];
// let arr2 = arr.slice();
// let arr3 = [...arr];

// arr3.push(10);
// console.log(arr);
// console.log(arr3);


// let obj1 = { a: 'foo' };
// let obj2 = { b: 'bar' };

// Object.assign(obj1, obj2);

// console.log(obj1);

// let obj = { a: 'foo', b: [1, 2] };
// let objCopy = Object.assign({}, obj);
// objCopy.c = 'car'
// objCopy.b[1] = 9

// console.log(objCopy);
// console.log(obj);


// let arr = [{a: 'foo'}, ['bar']];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);
// deepCopiedArr[1][1] = 'bar';
// console.log(arr);
// console.log(deepCopiedArr);


// let obj = Object.freeze({a: 'foo'});
// let obj1 = Object.freeze([1, 2, 3]);

// obj.b = 'bar'
// console.log(obj)

// obj1[3] = 9;
// console.log(obj1);

// console.log(Object.isFrozen(obj));

let arr = Object.freeze([[2]]);
arr[0][1] = 9;
console.log(arr);

