const playerText = document.querySelector("#player");
const computerText = document.querySelector("computer");
const resultText = document.querySelector("#result");
const buttons = document.querySelector(".choiceBtn");

let player,computer,result
buttons.forEach(button => button.addEventListner("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = checkWinner();
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
        computer == "SCISSORS" ? "You WIN!" : "You LOOSE!";
    }
    else if (player == "PAPER") {
        computer == "ROCK" ? "You WIN!" : "You Loose!";
    }
    else if (player == "SCISSORS") { 
        computer == "PAPER" ? "You WIN!" : "You Loose!";
    }
}