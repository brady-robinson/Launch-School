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

function Participant() {
  this.hand = [];
}

Participant.prototype.score = function(cardValues) {
  let sumCards = 0;
  let currentCard;

  for (let index = 0; index < this.hand.length; ++index) {
    currentCard = this.hand[index];
    sumCards += cardValues[currentCard];
  }

  for (let index = 0; index < this.hand.length; ++index) {
    if (this.hand[index] === 'Ace' && sumCards > 21) {
      sumCards -= 10;
    }
  }

  return sumCards;
};

Participant.prototype.isBusted = function(cardValues) {
  let sumCards = this.score(cardValues);

  if (sumCards > 21) {
    return true;
  } else {
    return false;
  }
};

function Player() {
  Participant.call(this);
}

Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

Player.prototype.hit = function(cards) {
  let playerCardIndex;
  let playerCard;

  playerCardIndex = Math.floor(Math.random() * cards.length);
  playerCard = cards.splice(playerCardIndex,1)[0];
  this.hand.push(playerCard);
};

function Dealer() {
  Participant.call(this);
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

Dealer.prototype.hit = function(cards) {
  let dealerCardIndex;
  let dealerCard;

  dealerCardIndex = Math.floor(Math.random() * cards.length);
  dealerCard = cards.splice(dealerCardIndex,1)[0];
  this.hand.push(dealerCard);
};

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
    playerCardIndex = Math.floor(Math.random() * this.deck.cards.length);
    playerCard = this.deck.cards.splice(playerCardIndex,1)[0];
    this.player.hand.push(playerCard);

    dealerCardIndex = Math.floor(Math.random() * this.deck.cards.length);
    dealerCard = this.deck.cards.splice(dealerCardIndex,1)[0];
    this.dealer.hand.push(dealerCard);
  }
};

TwentyOneGame.prototype.showCards = function(all = false) {
  if (all) {
    console.log(`Player cards: ${this.player.hand}`);
    console.log(`Dealer cards: ${this.dealer.hand}`);
  } else {
    console.log(`Player cards: ${this.player.hand}`);
    console.log(`Dealer cards: ${this.dealer.hand[0]}`);
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
      this.player.hit(this.deck.cards);
      this.showCards();
      if (this.player.isBusted(this.deck.cardValues)) {
        console.log("Player busted!");
        break;
      }
    }
  }
};

TwentyOneGame.prototype.dealerTurn = function() {
  if (this.player.score(this.deck.cardValues) > 21) return false;
  while (this.dealer.score(this.deck.cardValues) < 17) {
    this.dealer.hit(this.deck.cards);
    if (this.dealer.isBusted(this.deck.cardValues)) {
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
  if (this.player.score(this.deck.cardValues) > 21) return console.log("Dealer wins!");
  if (this.dealer.score(this.deck.cardValues) > 21) return console.log("Player wins!");

  if (this.player.score(this.deck.cardValues) >
    this.dealer.score(this.deck.cardValues)) {
    console.log("Player wins!");
  } else if (this.dealer.score(this.deck.cardValues) >
    this.player.score(this.deck.cardValues)) {
    console.log("Dealer wins!");
  } else {
    console.log("Tie!");
  }
  return null;
};

let game = new TwentyOneGame();
game.start();

