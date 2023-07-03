let readline = require("readline-sync")

class Card {
  constructor() {}
}

class Deck {
  constructor() {
    this.cards = ["2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "Jack", "Jack", "Jack", "Jack", "Queen", "Queen", "Queen", "Queen", "King", "King", "King", "King","Ace", "Ace", "Ace", "Ace"]
    this.cardValues = {"2":2, "2":2, "2":2, "2":2, "3":3, "3":3, "3":3, "3":3, "4":4, "4":4, "4":4, "4":4, "5":5, "5":5, "5":5, "5":5, "6":6, "6":6, "6":6, "6":6, "7":7, "7":7, "7":7, "7":7, "8":8, "8":8, "8":8, "8":8, "9":9, "9":9, "9":9, "9":9, "10":10, "10":10, "10":10, "10":10, "Jack":10, "Jack":10, "Jack":10, "Jack":10, "Queen":10, "Queen":10, "Queen":10, "Queen":10, "King":10, "King":10, "King":10, "King":10,"Ace":11, "Ace":11, "Ace":11, "Ace":11}
  }
  deal(player, dealer) {

  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  isBusted(cards, cardValues) {
    let sumCards = 0;
    let currentCard;

    for (let index = 0; index < this.hand.length; ++ index) {
      currentCard = this.hand[index]
      sumCards += cardValues[currentCard];
    }

    if (sumCards > 21) {
      return true;
    } else {
      return false;
    }
  }

  score(cards, cardValues) {
    let sumCards = 0;
    let currentCard;

    for (let index = 0; index < this.hand.length; ++ index) {
      currentCard = this.hand[index]
      sumCards += cardValues[currentCard];
    }

    return sumCards;
  }
}

class Player extends Participant {
  constructor() {
    super()
  }
  hit(cards) {
    let playerCardIndex;
    let playerCard;

    playerCardIndex = Math.floor(Math.random() * cards.length);
    playerCard = cards.splice(playerCardIndex,1)[0]
    this.hand.push(playerCard)
  }
  stay() {}
}

class Dealer extends Participant {
  constructor() {
    super()
  }
  hit(cards) {
    let dealerCardIndex;
    let dealerCard;

    dealerCardIndex = Math.floor(Math.random() * cards.length);
    dealerCard = cards.splice(dealerCardIndex,1)[0]
    this.hand.push(dealerCard)
    console.log(this.hand)
  }
  stay() {}
  hide() {}
  reveal() {}
  deal() {}
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck;
    this.player = new Player;
    this.dealer = new Dealer;
  }
  start() {
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }
  dealCards() {
    let playerCardIndex;
    let playerCard;
    let dealerCardIndex;
    let dealerCard;
    for (let index = 0; index <= 1; ++index) {
      playerCardIndex = Math.floor(Math.random() * this.deck.cards.length);
      playerCard = this.deck.cards.splice(playerCardIndex,1)[0]
      this.player.hand.push(playerCard)

      dealerCardIndex = Math.floor(Math.random() * this.deck.cards.length);
      dealerCard = this.deck.cards.splice(dealerCardIndex,1)[0]
      this.dealer.hand.push(dealerCard)
    }
  }
  showCards(all=false) {
    if (all) {
      console.log(`Player cards: ${this.player.hand}`)
      console.log(`Dealer cards: ${this.dealer.hand}`)
    } else {
      console.log(`Player cards: ${this.player.hand}`)
      console.log(`Dealer cards: ${this.dealer.hand[0]}`)
    }
    
  }
  playerTurn() {
    let choice;
    while (true) {
      do {
        choice = readline.question("Hit or stay? (h/s)");
      } while (!["s", "h"].includes(choice));

      if (choice === "s") {
        this.player.stay()
        console.log("Player cards: " + String(this.player.hand))
        break;
      } else if (choice === "h") {
        this.player.hit(this.deck.cards)
        this.showCards();
        if (this.player.isBusted(this.deck.cards, this.deck.cardValues)) {
          console.log("Player busted!")
          break;
        }
      }
    }
  }
  dealerTurn() {
    if (this.player.score(this.player.hand, this.deck.cardValues) > 21) return false;
    while (this.dealer.score(this.dealer.hand, this.deck.cardValues) < 17) {
      this.dealer.hit(this.deck.cards);
      this.showCards();
      if (this.dealer.isBusted(this.dealer.hand, this.deck.cardValues)) {
          console.log("Dealer busted!")
          break;
      }
    }
    this.showCards(true);
  }
  displayWelcomeMessage() {
    console.log("Welcome to 21!");
  }
  displayGoodbyeMessage() {
    console.log("Thank you for playing 21!");
  }
  displayResult() {
    if (this.player.score(this.player.hand, this.deck.cardValues) > 21) return console.log("Dealer wins!");
    if (this.player.score(this.dealer.hand, this.deck.cardValues) > 21) return console.log("Player wins!");

    if (this.player.score(this.player.hand, this.deck.cardValues) > this.dealer.score(this.dealer.hand, this.deck.cardValues)) {
      console.log("Player wins!")
    } else if (this.dealer.score(this.dealer.hand, this.deck.cardValues) > this.player.score(this.player.hand, this.deck.cardValues)) {
      console.log("Dealer wins!")
    } else {
      console.log("Tie!")
    }
  }
}

let game = new TwentyOneGame();
game.start();







