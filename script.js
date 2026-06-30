console.log("Hello World")

function getComputerChoice() {
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



function getHumanChoice() {
    let humanChoice = prompt("Choose rock,paper or scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0; 

   const resultDiv = document.getElementById("result");
    function updateResult() {
        resultDiv.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    }

function playRound(humanChoice, computerChoice) {
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

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
        updateResult();
            if (humanScore === 5) {
                resultDiv.textContent = "You win the game!";
            } else if (computerScore === 5) {
                resultDiv.textContent = "Computer wins the game!";
            }
        }
    );

    paperButton.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
        updateResult();
            if (humanScore === 5) {
                resultDiv.textContent = "You win the game!";
            } else if (computerScore === 5) {
                resultDiv.textContent = "Computer wins the game!";
            }
        }
    );
              
            
        
        


    scissorsButton.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
        updateResult();
            if (humanScore === 5) {
                resultDiv.textContent = "You win the game!";
            } else if (computerScore === 5) {
                resultDiv.textContent = "Computer wins the game!";
            }
        }           
        
    );

 