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
console.log(getComputerChoice());