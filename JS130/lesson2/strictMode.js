"use strict";

// let bar;

// function foo() {
//   bar = 3.1415;
// }

// foo();
// console.log(bar);
// console.log(global);

// let aVariableWithALongName = 3.1415;
// aVariab1eWithALongName = 2.7;

// console.log(aVariableWithALongName);

// let obj = {
//   a: 5,
//   go() {

//     this.a = 42;
//   },
// };

// let doIt = obj;
// doIt.go();
// console.log(obj.a);

// function Child(age) {
//   this.age = age;
// }

// Child.prototype.setAge = function(newAge) {
//   this.age = newAge;
// }

// let me = new Child(5);
// me.setAge(10);
// console.log(me.age);

// console.log(0.2);
// console.log(123456);
// console.log(089);
// console.log(0123456);

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());

