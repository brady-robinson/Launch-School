// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let Rectangle = class {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// };

// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);
// console.log(rec instanceof Rectangle);
// console.log(rec.constructor);
// console.log(rec.getArea());


// function createObject(classDef) {
//   return new classDef();
// }

// class Foo {
//   sayHi() {
//     console.log('Hi!');
//   }
// }

// let obj = createObject(Foo);
// obj.sayHi();

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }
}

console.log(Rectangle.getDescription());
// console.log(Rectangle.getArea());




