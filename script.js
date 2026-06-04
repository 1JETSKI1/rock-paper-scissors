console.log("Hello World")

//function getComputerChoice
// generate a random number
// if number < 0.33 give rock
// esle if number < 0.66 give paper
// otherwise give scissors

function getComputerChoice () {
    let randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return "rock";
    }
    
    else if (randomNumber < 0.66) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

//function getHumanChoice 
//ask for human to type rock, paper or scissors
//return their choice

function getHumanChoice() {
    let humanChoice = prompt("Choose rock,paper or scissors");
    return humanChoice;
}

//add humanScore 
//add comuterScore
let humanScore = 0
let computerScore = 0

//function playRound
//if human has rock and computer has scissors → human wins
//if human has scissors and computer has paper → human wins
//if human has paper and computer has rock → human wins
//otherwise if both choices are the same → it's a tie
//otherwise → computer wins

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++; 
    console.log("You win! rock beats scissors");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++; 
        console.log("You win! scissors beats paper");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++; 
        console.log("You win! paper beats rock");
    }

    else if (humanChoice === computerChoice) {
        console.log("Its's a tie!");
    }
    else {
        computerScore++;
        console.log("You Lose!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);