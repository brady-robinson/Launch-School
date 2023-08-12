// let bar = 2;

// if (true) {
//   let foo = 1;
//   console.log(foo, bar);
// }

// let foo1 = 1; // declared scope: block
// var bar1 = 2; // declared scope: function

// if (true) {
//   let foo2 = 3; // declared scope: block
//   var bar2 = 4; // declared scope: function
// }

// function xyzzy() {
//   let foo3 = 5; // declared scope: block
//   var bar3 = 6; // declared scope: function

//   if (true) {
//     let foo4 = 7; // declared scope: block
//     var bar4 = 8; // declared scope: function
//   }
// }

// let foo1 = 1; // visibility scope: global
// var bar1 = 2; // visibility scope: global

// if (true) {
//   let foo2 = 3; // visibility scope: local (block scope)
//   var bar2 = 4; // visibility scope: global
// }

// function xyzzy() {
//   let foo3 = 5; // visibility scope: local (function scope)
//   var bar3 = 6; // visibility scope: local (function scope)

//   if (true) {
//     let foo4 = 7; // visibility scope: local (block scope)
//     var bar4 = 8; // visibility scope: local (function scope)
//   }
// }

// let foo1 = 1; // outer scope of function xyzz; outer scope of block 

// if (true) {
//   let foo2 = 3; // inner scope of block
// }

// function xyzzy() {
//   let foo3 = 5; // inner scope of function; outer scope of block

//   if (true) {
//     let foo4 = 7; // inner scope of block
//   }
// }

// var foo1 = 1; // outer scope of function xyzz; outer scope of block 
// let bar1 = 10;
// if (true) {
//   var foo2 = 3; // outer scope of function; outer scope of block
//   let bar8 = 9;
// }

// function xyzzy() {
//   var foo3 = 5; // inner scope of function; outer scope of block

//   if (true) {
//     var foo4 = 7; // outer scope of block
//   }

//   console.log(foo2);
//   console.log(bar1);
//   console.log(bar8);
// }

// xyzzy();





