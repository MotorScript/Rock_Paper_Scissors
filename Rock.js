

// Pseudocode

// Declare score variables

// Generate random number for computer choice

// Get User's choice of Rock, Paper Scissors 

// Call game function 5 times

// Compare the final scores

// Declare a winner

let userScore = 0;
let compScore = 0;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const getCompChoice = (randInt) => {
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

const getUserChoice = () => {
    let userChoice = null;

    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        try {
            userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        }
        catch (err) {
            console.log("User canceled operation");
        }
    }
    return userChoice;
}


const playGame = (compsChoice, usersChoice) => {

    const win = (
        (usersChoice == "rock" && compsChoice == "scissors") ||
        (usersChoice == "paper" && compsChoice == "rock") ||
        (usersChoice == "scissors" && compsChoice == "paper")
    );

    const tie = (usersChoice == compsChoice);

    if (win) {
        window.alert(`YOU WIN!!! ${usersChoice} beats ${compsChoice}!`);
        console.log("YOU WIN!!!");
        userScore += 1;
    } else if (tie) {
        window.alert(`TIE! ${usersChoice} ties with ${compsChoice}!`);
        console.log("TIE!");
    } else {
        window.alert(`YOU LOSE! ${compsChoice} beats ${usersChoice}!`);
        console.log("YOU LOSE!");
        compScore += 1;
    }

}


for (let i = 0; i <= 4; i++) {
    console.log(i);
    const userChoice = getUserChoice();
    const compChoice = getCompChoice(getRndInteger(1, 4));
    playGame(compChoice, userChoice);
}

if (userScore > compScore) {
    window.alert(
        `YOU WON OVERALL!! 
        Your Wins: ${userScore}
        Computer Wins: ${compScore}`);
} else if (userScore == compScore) {
    window.alert(
        `YOU TIED OVERALL
        Your Wins: ${userScore}
        Computer Wins: ${compScore}`);
} else {
    window.alert(
        `YOU LOST OVERALL
        Your Wins: ${userScore}
        Computer Wins: ${compScore}`);
}
// For my wife :)
// window.alert("YOU WIN!!")