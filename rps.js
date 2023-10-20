
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

function determineWinner (playerSelection, computerSelection)
{
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

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
function game()
{
    const playerSelection = prompt("What do you choose? (rock, paper, or scissors");
    const computerSelection = getComputerChoice();
    let playerWins = determineWinner(playerSelection, computerSelection);

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

while (winCount < 3 && compWinCount < 3)
{
    game();
}


