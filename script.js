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
                p.textContent = "You win! Paper beats Rock";
                humanScore++;
                break;
            } else if (computerSelection === "scissors") {
                p.textContent = "You lose! Scissors beat Paper";
                computerScore++;
                break;
            }
            else {
                p.textContent = "It's a tie!";
                break;
            }
        case "rock":
            if (computerSelection === "scissors"){
                p.textContent = "You win! Rock beats Scissors";
                humanScore++;
                break;
            } else if (computerSelection === "paper"){
                p.textContent = "You lose! Paper beats Rock";
                computerScore++;
                break;
            } else{
                p.textContent = "It's a tie!";
                break;
            }  
        case "scissors":
            if (computerSelection === "paper"){
                p.textContent = "You win! Scissors beat Paper";
                humanScore++;
                break;
            } else if (computerSelection === "rock"){
                p.textContent = "You lose! Rock beats Scissors";
                computerScore++;
                break;
            } else{
                p.textContent = "Oh, nothing happened, continue";
                break;
            }
    }};
function whoIsTheWinner(){
    if (humanScore === 5){
        h2.textContent = `Congratss!!! You f-ing won! ${humanScore} : ${computerScore}`;
        callFunction = true;
    } 
    if (computerScore === 5){
        h2.textContent = `You're a f-ing loser! ${humanScore} : ${computerScore}`;
        callFunction = true;
    }
    if (callFunction === true){
        buttonPaper.style.display = 'none';
        buttonRock.style.display = 'none';
        buttonScissors.style.display = 'none';
    }
}
function scores(computerScore, humanScore){
    compPoints.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
}
const outcome = document.querySelector('.outcome');
let callFunction = false;
let humanScore = 0;
let computerScore = 0;
const humanPoints = document.querySelector('.human-score');
const compPoints = document.querySelector('.comp-score');
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
const parentDiv = document.querySelector('.container');
const p = document.createElement('p');
const h2 = document.createElement('h2');
outcome.appendChild(h2);
parentDiv.appendChild(p);
buttonPaper.addEventListener('click',  () => {
    playRound('paper',getComputerChoice());
    scores(computerScore, humanScore);
    whoIsTheWinner();
});
buttonRock.addEventListener('click',  () => {
    playRound('rock',getComputerChoice());
    scores(computerScore, humanScore);
    whoIsTheWinner();
});
buttonScissors.addEventListener('click',  () => {
    playRound('scissors',getComputerChoice());
    scores(computerScore, humanScore);
    whoIsTheWinner();
});

