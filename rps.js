
function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1)
    {
        return "Rock";
    }
    if (rand === 2)
    {
        return "Paper";
    }
    if (rand === 3)
    {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
   playerChoice.textContent = playerSelection;
   computerChoice.textContent = computerSelection;
   
    if (playerSelection === computerSelection)
    {
        gameResult.textContent = "It's a tie!";
        return null;
    }

    if (playerSelection == "Rock")
    {
        
        if (computerSelection == "Scissors")
        {

            return true;
        }
        //if computer choice is not scissors, it must be paper
        else
        {
            return false;
        }
    }

    else if (playerSelection == "Scissors")
    {
        if (computerSelection == "Raper")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    else if (playerSelection == "Paper")
    {
        if (computerSelection == "Rock")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}

let winCount = 0;
let compWinCount = 0;


const body = document.querySelector("body");
const gameContainer = document.querySelector(".gameContainer");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const result = document.createElement("p");
result.classList.add("result")
const resultGif = document.createElement("img");
resultGif.classList.add("gif")


const btnCont = document.querySelector(".btnCont");
const choices = document.querySelectorAll(".choice");
const endMessage = document.querySelector(".end");

const playerChoice = document.getElementById("playerChoice")
const computerChoice = document.getElementById("computerChoice");
const gameResult = document.getElementById("gameResult");


const playAgain = document.createElement("button");
playAgain.textContent = "Play Again?";

playAgain.addEventListener("click", () => {
    winCount = 0;
    compWinCount = 0;
    body.appendChild(gameContainer);
    playAgain.remove();
    result.remove();
    resultGif.remove();
    endMessage.remove();
    player.textContent = winCount;
    computer.textContent = compWinCount;

});



function game()
{
    let playerWins;
    choices.forEach((button) => {
        button.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playerWins = playRound(button.id, computerSelection);
            keepScore(playerWins)
            if (winCount == 5 || compWinCount == 5){
                endGame();

            }
 
        });
    });
    

}
function keepScore(playerWins){
    if (playerWins)
            {
                winCount++;
                player.textContent = winCount;
                gameResult.textContent = "You win!";
            }
            else if (playerWins != null)
            {
                compWinCount++;
                computer.textContent = compWinCount;
                gameResult.textContent = "You lose."
            }
}



function endGame(){
    body.appendChild(endMessage);
    gameContainer.remove();
    if (winCount > compWinCount){
        result.textContent = "YOU WIN!!";
        resultGif.src = "img/winner.gif";
    }
    else {
        result.textContent = "YOU LOSE!!";
        resultGif.src = "img/loser.gif";
        

    }
    endMessage.appendChild(result);
    endMessage.append(resultGif);
    endMessage.appendChild(playAgain);
    
    }


game();








