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


console.log(getComputerChoice());

//function getHumanChoice 
//ask for human to type rock, paper or scissors
//return their choice
function getHumanChoice () {
    let humanChoice = prompt("Choose rock,paper or scissors");
    return humanChoice;
}

console.log(getHumanChoice())