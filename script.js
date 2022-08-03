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
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (player === computerSelection) return "It's A Tie!";
    else if (player === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors"
        }
        else {
            return "You Lose! Paper beats Rock"
        }
    }
    else if (player === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock"
        }
        else {
            return "You Lose! Scissors beats Paper"
        }
    }
    else if (player == "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper"
        }
        else {
            return "You Lose! Rock beats Scissors"
        }
    }
    else {
        return "Please Enter Either Rock, Paper or Scissors"
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));