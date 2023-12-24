const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const scoreP = document.querySelector("#playerResult");
const scoreC=document.querySelector("#computerResult")
const buttons = document.querySelectorAll(".choiceBtn");

let player, computer, result;
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = player;
    computerText.textContent = computer;
    resultText.textContent = checkWinner();
    updateScore();
}))

function computerTurn() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
        case 1: computer = "ROCK";
            break;
        case 2: computer = "PAPER";
            break;
        case 3: computer = "SCISSORS";
            break; 
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw";
    }
    else if (player == "ROCK") {
        return computer == "SCISSORS" ? "You WIN!" : "You LOOSE!";
    }
    else if (player == "PAPER") {
        return computer == "ROCK" ? "You WIN!" : "You Loose!";
    }
    else if (player == "SCISSORS") { 
        return computer == "PAPER" ? "You WIN!" : "You Loose!";
    }
}

function updateScore() {
    if (resultText.textContent == "You WIN!") { 
        playerScore += 1;
        scoreP.textContent = playerScore;
    } else if(resultText.textContent=="You Loose!") {
        computerScore += 1;
        scoreC.textContent = computerScore;
    }
}