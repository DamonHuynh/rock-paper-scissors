
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
             console.log("You win, rock beats scissors");
             return true;
        }
        //if computer choice is not scissors, it must be paper
        else
        {
            console.log("You lose, rock loses to paper");
            return false;
        }
    }

    else if (playerSelection == "scissors")
    {
        if (computerSelection == "paper")
        {
            console.log("You win, scissors beats paper");
            return true;
        }
        else
        {
            console.log("You lose, scissors loses to rock");
            return false;
        }
    }

    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            console.log("You win, paper beats rock");
            return true;
        }
        else
        {
            console.log( "You lose, paper loses to scissors");
            return false;
        }
    }

}

let winCount = 0;
let compWinCount = 0;
const btnCont = document.querySelector(".btnCont");
const choices = document.querySelectorAll(".choice");
const endMessage = document.querySelector(".end");

const playAgain = document.createElement("button");
playAgain.addEventListener("click", () => {
    winCount = 0;
    compWinCount = 0;
    choices.forEach((button) => {
        btnCont.appendChild(button);
    });
    playAgain.remove();
});

playAgain.textContent = "Play Again?";

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
            }
            else if (playerWins != null)
            {
                compWinCount++;
            }
            console.log("Player has: " + winCount);
            console.log("Computer has: " + compWinCount);

}

function endGame(){
    choices.forEach((button) => {
        btnCont.removeChild(button);
    });
    if (winCount > compWinCount){
        console.log("YOU WIN!!!!");
    }
    else {
        console.log("YOU LOSE!!!!");
    }
    startNewGame();
    
    }

function startNewGame(){
    endMessage.appendChild(playAgain);
}
game();




