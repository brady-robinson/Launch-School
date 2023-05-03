// function greet(language) {
//   switch (language) {
//     case 'en':
//       console.log('hello');
//       break;
//     case 'es':
//       console.log('hola');
//       break;
//     case 'fr':
//       console.log('bonjour');
//       break;
//   }
// }

// greet('en');

function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('hello');
    case 'es':
      return () => console.log('hola');
    case 'fr':
      return () => console.log('bonjour');
  }
}

let greeterEs = createGreeter('es');
greeterEs();
greeterEs();
greeterEs();

let greeterEn = createGreeter('en');
greeterEn();
greeterEn();
greeterEn();
