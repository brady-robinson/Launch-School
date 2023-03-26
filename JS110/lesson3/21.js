let readlineSync = require('readline-sync');
let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King', 'Ace', 'Ace', 'Ace', 'Ace'];
let playerCards = [];
let dealerCards = [];

function dealCards() {
  for (let i = 0; i < 4; i++) {
    randIndex = Math.floor(Math.random() * deck.length);
    currCard = deck.splice(randIndex, 1)[0];
    if (i < 2) {
      playerCards.push(currCard);
    } else {
      dealerCards.push(currCard);
    }
  }
}

function displayCards() {
  console.log(`Player has ${playerCards}`);
  console.log(`Dealer has ${dealerCards[0]}`);
}

function calculateTotal(cards) {
  let total = 0;

  if (cards.includes('Ace')) {
    includesAce = true;
  } else {
    includesAce = false;
  }

  for(let i = 0; i < cards.length; i++) {
    currCard = cards[i];
    if (typeof currCard === 'number') {
      total += currCard;
    } else if (currCard === 'Ace') {
      continue;
    } else {
      total += 10;
    }
  }

  if (includesAce) {
    let aces = cards.filter(item => item === 'Ace');
    let numberAces = aces.length

    if (numberAces === 1) {
      if ((total + 11) > 21) {
        total += 1;
      } else {
        total += 11;
      }
    } else {
      for (let i = 0; i < numberAces.length; i++) {
        if ((total + 11) > 21) {
          total += 1;
        } else {
          total += 11;
        }
      }
    }
  }
  return total;
}

function promptPlayer(allCards, playerCards, displayCards) {
  while (true) {
    let currMove = readlineSync.question('Would you like to hit or stay? (h/s)')
    if (currMove === 'h') {
      let randIndex = Math.floor(Math.random() * deck.length);
      currCard = allCards.splice(randIndex, 1)[0];
      playerCards.push(currCard);
      displayCards();
      let playerTotal = calculateTotal(playerCards);
      if (playerTotal > 21) {
        break;
      }
    } else {
      break;
    }
  }
  return calculateTotal(playerCards);
}

function promptDealer(allCards, dealerCards, displayCards, calculateTotal) {
  while (calculateTotal(dealerCards) < 17) {
    let randIndex = Math.floor(Math.random() * deck.length);
    currCard = allCards.splice(randIndex, 1)[0];
    dealerCards.push(currCard);
    console.log("Dealer hits!")
    displayCards();
  }
  return calculateTotal(dealerCards);
}

function resetGame() {
  deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King', 'Ace', 'Ace', 'Ace', 'Ace'];
  playerCards = [];
  dealerCards = [];
}

while (true) {
  dealCards();
  displayCards();
  let playerTotal = promptPlayer(deck, playerCards,displayCards);

  if (playerTotal > 21) {
    console.log("Player bust!")
  } else {
    let dealTotal = promptDealer(deck, dealerCards, displayCards, calculateTotal);
    if (dealTotal > 21) {
      console.log("Dealer busts! Player wins.")
    } else if (dealTotal > playerTotal) {
      console.log("Dealer wins!");
    } else {
      console.log("Player wins!");
    }
  }

  console.log(`Dealer cards: ${dealerCards}`);
  console.log(`Player cards: ${playerCards}`);

  console.log(calculateTotal(dealerCards));
  console.log(calculateTotal(playerCards));

  let playAgain = readlineSync.question("Would you like to play again? (y/n)")
  if (playAgain === 'n') {
    console.log('Goodbye!')
    break;
  }
  resetGame();
}

console.log('test')


