const playerChoice = document.createElement("img");
const computerChoice = document.createElement("img");

function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1)
    {
        return "rock";
    }
    if (rand === 2)
    {
        return "paper";
    }
    if (rand === 3)
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log("It's a tie!");
        return null;
    }

    if (playerSelection == "rock")
    {
        playerChoice.src = "img/rock.png";

        if (computerSelection == "scissors")
        {
             return true;
        }
        //if computer choice is not scissors, it must be paper
        else
        {
            return false;
        }
    }

    else if (playerSelection == "scissors")
    {
        playerChoice.src = "img/scissors.png";

        if (computerSelection == "paper")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    else if (playerSelection == "paper")
    {
        playerChoice.src = "img/paper.webp";
        if (computerSelection == "rock")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    playerScore.appendChild(playerChoice);
    computerScore.appendChild(computerChoice);
}

let winCount = 0;
let compWinCount = 0;
const body =document.querySelector("body");
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
            }
            else if (playerWins != null)
            {
                compWinCount++;
                computer.textContent = compWinCount;
            }
}



function endGame(){

    gameContainer.remove();
    if (winCount > compWinCount){
        result.textContent = "YOU WIN!!";
        endMessage.appendChild(result);

        resultGif.src = "img/winner.gif";
        endMessage.append(resultGif);

    }
    else {
        result.textContent = "YOU LOSE!!";
        endMessage.appendChild(result);

        resultGif.src = "img/loser.gif";
        endMessage.append(resultGif);

    }
    endMessage.appendChild(playAgain);
    
    }


game();








