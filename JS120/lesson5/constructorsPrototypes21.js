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
}

Deck.prototype.removeDealtCard = function(index) {
  return this.cards.splice(index,1)[0];
};

Deck.prototype.getDeck = function() {
  return this.cards;
};

Deck.prototype.getLength = function() {
  return this.cards.length;
};

Deck.prototype.getValues = function() {
  return this.cardValues;
};

function Participant() {
  this.hand = [];
}

Participant.prototype.getHand = function() {
  return this.hand;
};

Participant.prototype.getHandLength = function() {
  return this.hand.length;
};

Participant.prototype.getCardAt = function(index) {
  return this.hand[index];
};

Participant.prototype.score = function() {
  let cardValues = {
    2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10,
    Jack:10, Queen:10, King:10,Ace:11};
  let sumCards = 0;
  let currentCard;

  for (let index = 0; index < this.getHandLength(); ++index) {
    currentCard = this.getCardAt(index);
    sumCards += cardValues[currentCard];
  }

  for (let index = 0; index < this.getHandLength(); ++index) {
    if (this.getCardAt(index) === 'Ace' && sumCards > TwentyOneGame.TWENTY_ONE) {
      sumCards -= 10;
    }
  }

  return sumCards;
};

Participant.prototype.addCard = function(card) {
  this.hand.push(card);
};

Participant.prototype.isBusted = function() {
  let sumCards = this.score();

  return sumCards > TwentyOneGame.TWENTY_ONE;
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

Dealer.prototype.getFaceUpCard = function() {
  return this.hand[0];
};

function TwentyOneGame() {
  this.deck = new Deck();
  this.player = new Player();
  this.dealer = new Dealer();
}

TwentyOneGame.TWENTY_ONE = 21;
TwentyOneGame.DEALER_STOP = 17;

TwentyOneGame.prototype.getDeck = function() {
  return this.deck.getDeck();
};

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
    playerCardIndex = Math.floor(Math.random() * this.deck.getLength());
    playerCard = this.deck.removeDealtCard(playerCardIndex);
    this.player.addCard(playerCard);

    dealerCardIndex = Math.floor(Math.random() * this.deck.getLength());
    dealerCard = this.deck.removeDealtCard(dealerCardIndex);
    this.dealer.addCard(dealerCard);
  }
};

TwentyOneGame.prototype.showCards = function(all = false) {
  if (all) {
    console.log(" ");
    console.log(`Player cards: ${this.player.getHand()}`);
    console.log(`Player score: ${this.player.score()}`);
    console.log(" ");
    console.log(`Dealer cards: ${this.dealer.getHand()}`);
    console.log(" ");
  } else {
    console.log(" ");
    console.log(`Player cards: ${this.player.getHand()}`);
    console.log(`Player score: ${this.player.score()}`);
    console.log(" ");
    console.log(`Dealer cards: ${this.dealer.getFaceUpCard()}`);
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
      this.player.hit(this.getDeck());
      this.showCards();
      if (this.player.isBusted()) {
        console.log("Player busted!");
        break;
      }
    }
  }
};

TwentyOneGame.prototype.dealerTurn = function() {
  if (this.player.score() > TwentyOneGame.TWENTY_ONE) return false;
  while (this.dealer.score() < TwentyOneGame.DEALER_STOP) {
    this.dealer.hit(this.getDeck());
    if (this.dealer.isBusted()) {
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
  let playerScore = this.player.score();
  let dealerScore = this.dealer.score();

  if (playerScore > TwentyOneGame.TWENTY_ONE) return console.log("Dealer wins!");
  if (dealerScore > TwentyOneGame.TWENTY_ONE) return console.log("Player wins!");

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

