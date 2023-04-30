let readlineSync = require('readline-sync');

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readlineSync.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Invalid choice');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors!');
  },

  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log("You win!");
      this.human.score += 1;
    } else if ((computerMove === 'paper' && humanMove === 'rock') ||
               (computerMove === 'rock' && humanMove === 'scissors') ||
               (computerMove === 'scissors' && humanMove === 'paper')) {
      console.log("Computer wins!");
      this.computer.score += 1;
    } else {
      console.log("It's a tie!");
    }
  },

  displayScores() {
    console.log(`You have won ${this.human.score} times.`);
    console.log(`The computer has won ${this.computer.score} times.`);
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    this.human.score = 0;
    this.computer.score = 0;
    let answer = readlineSync.question();
    return answer.toLowerCase()[0] === 'y' ? true : false;
  },

  displayMatchWinner() {
    console.log((this.human.score === 3) ? "You won the match!" : "The computer won the match!");
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < 3 && this.computer.score < 3) {
        this.human.choose();
        this.computer.choose();
        this.displayRoundWinner();
        this.displayScores();
      }
      this.displayMatchWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
