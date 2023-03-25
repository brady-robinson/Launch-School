let readlineSync = require('readline-sync');
let choices = {1: "", 2: "", 3: "", 4: "", 5:"", 6:"", 7:"", 8:"", 9:""};
let userWins = false;
let computerWins = false;
let numTurns = 0;
let playAgain = 'y';

function resetGame() {
  choices = {1: "", 2: "", 3: "", 4: "", 5:"", 6:"", 7:"", 8:"", 9:""};
  numTurns = 0;
  userWins = false;
  computerWins = false;
}

function displayBoard() {
  console.log("");
  console.log(` ${choices[1]} | ${choices[2]} | ${choices[3]}`)
  console.log(`--------`)
  console.log(` ${choices[4]} | ${choices[5]} | ${choices[6]}`)
  console.log(`--------`)
  console.log(` ${choices[7]} | ${choices[8]} | ${choices[9]}`)
  console.log("");
}

function boardFull() {
  if (Object.values(choices).includes("")) {
    return false
  }
  return true
}

function computerMove() {
  let currChoice = Math.floor(Math.random() * 9);
  while (choices[currChoice] !== "") {
    currChoice = Math.floor(Math.random() * 9);
  }
  choices[currChoice] = "o";
}

function determineWinner(player){
  if (choices[1] === player && choices[2] === player && choices[3] === player) {
    return true
  } else if (choices[4] === player && choices[5] === player && choices[6] === player) {
    return true
  } else if (choices[7] === player && choices[8] === player && choices[9] === player) {
    return true
  } else if (choices[1] === player && choices[4] === player && choices[7] === player) {
    return true
  } else if (choices[2] === player && choices[5] === player && choices[8] === player) {
    return true
  } else if (choices[3] === player && choices[6] === player && choices[9] === player) {
    return true
  } else if (choices[1] === player && choices[5] === player && choices[9] === player) {
    return true
  } else if (choices[3] === player && choices[5] === player && choices[7] === player) {
    return true
  }
  return false
}

function validMove(userMove) {
  if (choices[userMove] !== "") {
    return false
  } else if (userMove > 9 || userMove < 1) {
    return false
  }
  return true
}

displayBoard();

while (playAgain === 'y') {
  while (numTurns <= 8) {

    while (true) {
      userMove = readlineSync.question("Make a move (1-9): ");
      if (validMove(userMove)) {
        break;
      }
      console.log("Invalid move.");
    }

    choices[userMove] = "x";
    userWins = determineWinner('x');



    if (userWins) {
      displayBoard();
      break;
    }

    if (boardFull()) {
      displayBoard();
      break;
    }

    if (numTurns < 8) {
      computerMove();
    }
    
    displayBoard();

    
    computerWins = determineWinner('o');

    if (computerWins) {
      displayBoard();
      break;
    }

    numTurns += 1;
  }

  if (userWins) {
    console.log("You win!");
  } else if (computerWins) {
    console.log("Computer wins.");
  } else {
    console.log("It's a tie.");
  }

  playAgain = readlineSync.question("Play again? (y/n)");
  resetGame();
}

console.log("Goodbye!")
