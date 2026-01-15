// Dom 
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const resetB = document.querySelector("#reset")
const resultDiv = document.querySelector("#result")
const scoreDiv = document.querySelector("#score")
    const statusDiv = document.querySelector("#game-status");


function getComputerChoice() {
const randomNum = Math.random() // It returns a random number greater than or equal to 0, but less than 1
     
      
     if (randomNum< 0.33) {
        return "rock"; 
     
    } else if (randomNum <0.66) {
        return "paper";
    
    } else {
        return "scissors";
    }
}

// socre of the games
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice){
if(humanScore >= 5 || computerScore >= 5) return;


const computerChoice = getComputerChoice();
let roundresult = ""


if (humanChoice ===  computerChoice) {
    roundresult = `It's a tie! You both chose ${humanChoice}`;

} else if  (
    
(humanChoice === "rock" && computerChoice === "scissors")||
(humanChoice === "paper" && computerChoice === "rock")||
(humanChoice === "scissors" && computerChoice === "paper")
)  {

roundresult = `You win! ${humanChoice} beats ${computerChoice}`
    humanScore++;

} else {
roundresult = `You lose! ${computerChoice} beats ${humanChoice}`
  computerScore++;
}


updateScore();
resultDiv.textContent = roundresult;


if (humanScore ===5) {
    statusDiv.textContent = "player won the game!"

}else if (computerScore === 5) {
    statusDiv.textContent = "Computer won the game!"
}

}

function updateScore() {
      scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }

  
//
rockBtn.addEventListener("click", () => playRound("rock"))
paperBtn.addEventListener("click", () => playRound("paper"))
scissorsBtn.addEventListener("click", () => playRound("scissors"))
