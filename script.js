//Rock, paper, scissors game

function getComputerChoice() {
  let randNumber = Math.floor(Math.random() * 3);
  if (randNumber < 1) {
    return "Rock"
  }
  else if (randNumber < 2) {
    return "Paper"
  }
  else {
    return "Scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "Tie";
  else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "Win"
    }
    else {
      return "Lose"
    }
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "Win"
    }
    else {
      return "Lose"
    }
  }
  else if (playerSelection == "Scissors") {
    if (computerSelection === "Paper") {
      return "Win"
    }
    else {
      return "Lose"
    }
  }
  else {
    return null
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  if (result == "Win") {
    roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if (result == "Lose") {
    roundResult.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}`;
    computerScore++;
  }
  else if (result == "Tie") {
    roundResult.textContent = "It's a tie";
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      score.textContent = `The Player Wins. `;
    }
    else {
      score.textContent = `The Computer Wins. `;
    }
    score.textContent += "Choose a weapon to start again"
    playerScore = 0;
    computerScore = 0;
  }
  else {
    score.textContent = `Player: ${playerScore} - Computer ${computerScore}`;
  }
}

let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll('button');
const roundResult = document.querySelector('#result');
const score = document.querySelector('#score');

function choice(e) {
  game(this.id);
}

btn.forEach((button) => {
  button.addEventListener('click', choice);
});
