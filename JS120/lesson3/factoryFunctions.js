// function createPerson(firstName, lastName = '') {
//   let person = {};
//   person.firstName = firstName;
//   person.lastName = lastName;

//   person.fullName = function() {
//     return `${this.firstName} ${this.lastName}`.trim();
//   };

//   return person;
// }

function createPerson(firstName, lastName = '') {
  return{
    firstName: firstName,
    lastName: lastName,
    fullName() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  };
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

console.log(john.fullName());
console.log(jane.fullName());