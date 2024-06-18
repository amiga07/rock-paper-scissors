function getComputerChoice(){
    const number = Math.random();
    if (number > 0.8){
        return "scissors";
    }
    else if (number > 0.3){
        return "paper";
    } 
    else{
        return "rock";
    }
}
function getHumanChoice(){
    let choice = prompt("Scissors, Rock or Paper?", "Paper");
    choice = choice.toLowerCase();
    if (choice == "scissors" || choice == "paper" || choice == 'rock'){
        return choice;
    } else{
        alert("Please, re-enter your choice");
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "paper":
            if (computerChoice == "rock"){
                humanScore += 1;
                computerScore;
            } else if (computerChoice == "scissors") {
                humanScore;
                computerScore += 1;
            }
            else {
                humanScore;
                computerScore;
            }
        case "rock":
            if (computerChoice == "scissors"){
                computerScore;
                humanScore += 1;
            } else if (computerChoice == "paper"){
                computerScore += 1;
                humanScore;
            } else{
                humanScore;
                computerScore;
            }
        case "scissors":
            if (computerChoice == "paper"){
                humanScore += 1;
                computerScore;
            } else if (computerChoice == "rock"){
                humanScore;
                computerScore += 1;
            } else{
                humanScore;
                computerScore;
            }
    }
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`${computerScore}:${humanScore},    ${computerSelection}`);