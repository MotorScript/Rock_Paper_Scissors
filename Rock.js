

// Pseudocode

// Get User's choice of Rock, Paper Scissors 

// Generate a random choice of the computer of RPS

// Compare the choices

// Declare a winner

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getUserChoice = () => prompt("Rock, Paper, or Scissors?").toLowerCase();
let userChoice = null;

while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    try {
        userChoice = getUserChoice();
    }
    catch (err) {
        console.log("caught")
        userChoice = "Rock";
    }
}

const getCompChoice = () => {
    const randInt = getRndInteger(1, 4);
    let compChoice = "";
    if (randInt === 1) {
        compChoice = "rock";
    } else if (randInt === 2) {
        compChoice = "paper";
    } else if (randInt === 3) {
        compChoice = "scissors";
    }
    return compChoice;
}

const compChoice = getCompChoice();

const playGame = (userChoice, compChoice) => {



    const win = (
        (userChoice == "rock" && compChoice == "scissors") ||
        (userChoice == "paper" && compChoice == "rock") ||
        (userChoice == "scissors" && compChoice == "paper")
    );

    const tie = (userChoice == compChoice);

    if (win) {
        window.alert(`YOU WIN!!! ${userChoice} beats ${compChoice}!`)
        console.log("YOU WIN!!!");
    } else if (tie) {
        window.alert(`TIE! ${userChoice} ties with ${compChoice}!`)
        console.log("TIE!");
    } else {
        window.alert(`YOU LOSE! ${compChoice} beats ${userChoice}!`)
        console.log("YOU LOSE!");
    }

}

playGame(userChoice, compChoice)
// For my wife :)
// window.alert("YOU WIN!!")