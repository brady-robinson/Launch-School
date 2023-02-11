// let person = {
//   name:    'Jane',
//   age:     37,
//   hobbies: ['photography', 'genealogy'],
// };

// person.height = '5 ft';
// person['gender'] = 'female';

// delete person.age;
// delete person['gender'];
// delete person['hobbies'];

// console.log(person)

// function hello() {
//   console.log("hey person");
// }

// hello();

// let greet = hello;
// greet();

// let hello = function() {
//   console.log("hey person");
// }

// hello();


// let bob = { name: 'Bob', age: 22 };
// let studentBob = Object.create(bob);
// studentBob.year = 'Senior';

// console.log(studentBob.name);


let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};


for (let prop in person) {
  console.log(person[prop]);
}









