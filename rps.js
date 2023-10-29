
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
        if (computerSelection == "rock")
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

const container = document.querySelector(".container");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const result = document.createElement("p");
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
    choices.forEach((button) => {
        btnCont.appendChild(button);
    });
    playAgain.remove();
    result.remove();
    resultGif.remove();
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
    choices.forEach((button) => {
        btnCont.removeChild(button);
    });
    if (winCount > compWinCount){
        result.textContent = "YOU WIN!!";
        container.appendChild(result);

        resultGif.src = "img/winner.gif";
        container.append(resultGif);

    }
    else {
        result.textContent = "YOU SUCK!!";
        container.appendChild(result);

        resultGif.src = "img/loser.gif";
        container.append(resultGif);

    }
    endMessage.appendChild(playAgain);
    
    }


game();








