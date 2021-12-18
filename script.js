// Brings up an alert to the user to ask what they choose
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

// Randomises computer choice between rock, paper and scissors (makes it even due to values chosen, so if played 100 times we should get even outcomes)
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

