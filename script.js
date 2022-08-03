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

console.log(getComputerChoice())