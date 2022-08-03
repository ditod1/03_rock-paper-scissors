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

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const input = prompt("Enter your choice (Either rock, paper or scissors):");
        const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == "Win") {
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (result == "Lose") {
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if (result == "Tie") {
            console.log("It's a tie");
        }
    }
    console.log(`The final score is: Player ${playerScore} - Computer ${computerScore}`)
}


game();