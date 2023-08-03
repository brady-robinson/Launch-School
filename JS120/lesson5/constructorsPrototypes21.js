let readline = require("readline-sync");

function Deck() {
  this.cards = [
    "2", "2", "2", "2",
    "3", "3", "3", "3",
    "4", "4", "4", "4",
    "5", "5", "5", "5",
    "6", "6", "6", "6",
    "7", "7", "7", "7",
    "8", "8", "8", "8",
    "9", "9", "9", "9",
    "10", "10", "10", "10",
    "Jack", "Jack", "Jack", "Jack",
    "Queen", "Queen", "Queen", "Queen",
    "King", "King", "King", "King",
    "Ace", "Ace", "Ace", "Ace"];

  this.cardValues = {
    2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10,
    Jack:10, Queen:10, King:10,Ace:11};
}

Deck.prototype.getDeck = function() {
  return this.cards;
};

Deck.prototype.getValues = function() {
  return this.cardValues;
};

Deck.TWENTY_ONE = 21;
Deck.DEALER_STOP = 17;

function Participant() {
  this.hand = [];
}

Participant.prototype.getHand = function() {
  return this.hand;
};

Participant.prototype.score = function(cardValues) {
  let sumCards = 0;
  let currentCard;

  for (let index = 0; index < this.getHand().length; ++index) {
    currentCard = this.getHand()[index];
    sumCards += cardValues[currentCard];
  }

  for (let index = 0; index < this.getHand().length; ++index) {
    if (this.getHand()[index] === 'Ace' && sumCards > Deck.TWENTY_ONE) {
      sumCards -= 10;
    }
  }

  return sumCards;
};

Participant.prototype.isBusted = function(cardValues) {
  let sumCards = this.score(cardValues);

  return sumCards > Deck.TWENTY_ONE;
};

Participant.prototype.hit = function(deck) {
  let playerCardIndex = Math.floor(Math.random() * deck.length);
  let playerCard = deck.splice(playerCardIndex,1)[0];
  this.getHand().push(playerCard);
};

function Player() {
  Participant.call(this);
}

Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

function Dealer() {
  Participant.call(this);
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

function TwentyOneGame() {
  this.deck = new Deck();
  this.player = new Player();
  this.dealer = new Dealer();
}

TwentyOneGame.prototype.start = function() {
  this.displayWelcomeMessage();
  this.dealCards();
  this.showCards();
  this.playerTurn();
  this.dealerTurn();
  this.displayResult();
  this.displayGoodbyeMessage();
};

TwentyOneGame.prototype.dealCards = function() {
  let playerCardIndex;
  let playerCard;
  let dealerCardIndex;
  let dealerCard;
  for (let index = 0; index <= 1; ++index) {
    playerCardIndex = Math.floor(Math.random() * this.deck.getDeck().length);
    playerCard = this.deck.getDeck().splice(playerCardIndex,1)[0];
    this.player.getHand().push(playerCard);

    dealerCardIndex = Math.floor(Math.random() * this.deck.getDeck().length);
    dealerCard = this.deck.getDeck().splice(dealerCardIndex,1)[0];
    this.dealer.getHand().push(dealerCard);
  }
};

TwentyOneGame.prototype.showCards = function(all = false) {
  if (all) {
    console.log(" ");
    console.log(`Player cards: ${this.player.getHand()}`);
    console.log(`Player score: ${this.player.score(this.deck.getValues())}`);
    console.log(" ");
    console.log(`Dealer cards: ${this.dealer.getHand()}`);
    console.log(" ");
  } else {
    console.log(" ");
    console.log(`Player cards: ${this.player.getHand()}`);
    console.log(`Player score: ${this.player.score(this.deck.getValues())}`);
    console.log(" ");
    console.log(`Dealer cards: ${this.dealer.getHand()[0]}`);
    console.log(" ");
  }
};

TwentyOneGame.prototype.playerTurn = function() {
  let choice;
  while (true) {
    do {
      choice = readline.question("Hit or stay? (h/s)");
    } while (!["s", "h"].includes(choice));

    if (choice === "s") {
      console.clear();
      break;
    } else if (choice === "h") {
      console.clear();
      this.player.hit(this.deck.getDeck());
      this.showCards();
      if (this.player.isBusted(this.deck.getValues())) {
        console.log("Player busted!");
        break;
      }
    }
  }
};

TwentyOneGame.prototype.dealerTurn = function() {
  if (this.player.score(this.deck.getValues()) > Deck.TWENTY_ONE) return false;
  while (this.dealer.score(this.deck.getValues()) < Deck.DEALER_STOP) {
    this.dealer.hit(this.deck.getDeck());
    if (this.dealer.isBusted(this.deck.getValues())) {
      console.log("Dealer busted!");
      break;
    }
  }
  this.showCards(true);
  return null;
};

TwentyOneGame.prototype.displayWelcomeMessage = function() {
  console.clear();
  console.log("Welcome to 21!");
};

TwentyOneGame.prototype.displayGoodbyeMessage = function() {
  console.log(" ");
  console.log("Thank you for playing 21!");
  console.log(" ");
};

TwentyOneGame.prototype.displayResult = function() {
  let playerScore = this.player.score(this.deck.getValues());
  let dealerScore = this.dealer.score(this.deck.getValues());

  if (playerScore > Deck.TWENTY_ONE) return console.log("Dealer wins!");
  if (dealerScore > Deck.TWENTY_ONE) return console.log("Player wins!");

  if (playerScore > dealerScore) {
    console.log("Player wins!");
  } else if (dealerScore > playerScore) {
    console.log("Dealer wins!");
  } else {
    console.log("Tie!");
  }
  return null;
};

let game = new TwentyOneGame();
game.start();

