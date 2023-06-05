// function createPet(type, name) {
//   return {
//     animal: type,
//     name: name,

//     sleep: function() {
//       console.log("I am sleeping")
//     },

//     wake: function() {
//       console.log("I am awake")
//     },
//   }
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake

let PetPrototype = {
  init(type, name) {
    this.animal = type;
    this.name = name;
    return this;
  },

  wake: function() {
    console.log("I am awake")
  },

  sleep: function() {
    console.log("I am sleeping")
  },
}

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake