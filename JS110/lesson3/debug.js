function square(num) {
  return num * num;
}

let myArr = [1, 2, 3, 4, 5];

let squares = myArr.map(num => square(num));

console.log(square);