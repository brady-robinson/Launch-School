// let emptyArray = new Array()
// console.log(emptyArray);

// let numbers = new Array(1, 2, 3, 4)
// console.log(numbers)

// let colors = new Array("green", "blue", "yellow")
// console.log(colors)

// console.log(new Array(3))

// let zeroArray = new Array(100).fill(0)
// console.log(zeroArray);

// let numbers = [1, 2, 3]
// console.log(Object.getPrototypeOf(numbers) === Array.prototype)
// let squared = numbers.map(number => number * number);
// console.log(squared)
// console.log(numbers.includes(3))

// console.log(Array.isArray([]))
// console.log(Array.isArray({}))
// console.log(typeof [])

// console.log(Array.from({0: 'a', 1: 'b', 2: 'c', length: 3}))

// console.log(new Object())
// console.log(['a', 'b'].hasOwnProperty(1))

// console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype)

// let obj = { a: 1, b: 2 }
// console.log(obj.toString())

// console.log([1, 2, 3].toString())

// let func = function hello() {}
// console.log(func.toString())

// let now = new Date()
// console.log(now)
// console.log(now.toString())
// console.log(now.getFullYear())
// console.log(now.getDay())


// console.log('abc' === 'abc')
// let arr1 = [1, 2, 3]
// let arr2 = arr1
// console.log(arr1 === [1, 2, 3])
// console.log(arr1 === arr2)


// let strPrimitive = 'abc'
// console.log(typeof strPrimitive)

// let strObject = new String('xyz')
// console.log(typeof strObject)

// console.log('abc' === 'abc')
// console.log(new String('abc') === new String('abc'))

// let str = String('abc')
// console.log(typeof str)
// console.log(String(undefined))
// console.log(String(3.14))
// console.log(String([1, 2, 4]))
// console.log(String(a => a * a))

// console.log(typeof new Number('123'))
// console.log(typeof Number('123'))
// console.log(typeof new Boolean(0))
// console.log(typeof Boolean(0))


// Array.prototype.first = function() {
//   return this[0];
// }

// console.log([1, 2, 3].first());


// let string = 'EEE';
// console.log(Array.prototype.every.call(string, char => char === 'E'));
// console.log([].every.call(string, char => char === 'E'));


console.log([].filter.call('olivesv', val => val == 'v').join(''));
