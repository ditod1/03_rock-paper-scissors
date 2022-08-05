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
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
  }
  else if (result == "Lose") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
  else if (result == "Tie") {
    console.log("It's a tie");
  }
}

btn = document.querySelectorAll('button');

function choice(e) {
  game(this.id);
}

btn.forEach((button) => {
  button.addEventListener('click', choice);
});