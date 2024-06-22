function getComputerChoice(){
    let options = ["scissors", "rock", "paper"];
    let index = Math.floor(Math.random()* options.length);
    return options[index];
}
function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toLowerCase();
    switch (humanSelection){
        case "paper":
            if (computerSelection === "rock"){
                return "You win! Paper beats Rock";
            } else if (computerSelection === "scissors") {
                return "You lose! Scissors beat Paper";
            }
            else {
                return "it's a tie";
            }
        case "rock":
            if (computerSelection === "scissors"){
                return "You win! Rock beats Scissors";
            } else if (computerSelection === "paper"){
                return "You lose! Paper beats Rock";
            } else{
                return "it's a tie"; }    
        case "scissors":
            if (computerSelection === "paper"){
                return "You win! Scissors beat Paper";
            } else if (computerChoice === "rock"){
                return "You lose! Rock beats Scissors";
            } else{
                return "Oh, nothing happened, continue";
            }
    }

    }
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const humanSelection = prompt("Rock, paper or scissors", "Paper");
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        if (result.includes("win")){
            humanScore++;
        } else if (result.includes("lose")){
            computerScore++;
        } 
    }
    if (humanScore > computerScore){
        console.log("Congrats, you win the game!!!");
    } else if(computerScore > humanScore){
        console.log("Unfortunately, you lose the game");
    } else{
        console.log("It's a tie! The game ends in a draw");
    }
}
playGame();


