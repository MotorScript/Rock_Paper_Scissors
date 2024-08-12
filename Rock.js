

// Pseudocode

// Get User's choice of Rock, Paper Scissors 

// Generate a random choice of the computer of RPS

// Compare the choices

// Declare a winner

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let getUserChoice = () => prompt("Rock, Paper, or Scissors?").toLowerCase();

let randInt = getRndInteger(1, 4);
let compChoice = "";

if (randInt === 1) {
    compChoice = "rock";
} else if (randInt === 2) {
    compChoice = "paper";
} else if (randInt === 3) {
    compChoice = "sciccors";
}


console.log(compChoice);

let userChoice = getUserChoice();

while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    userChoice = getUserChoice();
}

let win = (
    (userChoice == "rock" && compChoice == "scissors") ||
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "scissors" && compChoice == "paper")
);

let tie = (userChoice == compChoice);

if (win) {
    console.log("YOU WIN!!!")
} else if (tie) {
    console.log("TIE!")
} else {
    console.log("YOU LOSE!")
}