function getComputerChoice()
{
    let rand = (Math.random() * 3) + 1;
    if (rand == 1)
    {
        return "rock";
    }
    if (rand == 2)
    {
        return "paper";
    }
    if (rand == 3)
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
        return "It's a tie!";
    }

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors")
        {
            return "You win, rock beats scissors";
        }
        //if computer choice is not scissors, it must be paper
        else
        {
            return "You lose, rock loses to paper"
        }
    }

    else if (playerSelection == "scissors")
    {
        if (computerSelection == "paper")
        {
            return "You win, scissors beats paper";
        }
        else
        {
            return "You lose, scissors loses to rock"
        }
    }

    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            return "You win, paper beats rock";
        }
        else
        {
            return "You lose, paper loses to scissors"
        }
    }

    function game ()
    {
        const playerSelection = prompt("What do you choose? (rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        determineWinner(playerSelection, computerSelection);

    }
}