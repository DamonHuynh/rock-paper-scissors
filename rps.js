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