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

// If choice 1 is strictly equal to choice 2 the result is a tie
var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
// rock beats scissors so return rock wins, if paper is chosen paper beats rock
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
// paper beats rock so return paper wins, if scissors is chosen scissors beats paper
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
// rock beats scissors so return rocks wins, if paper is chosen scissors beats paper so scissors wins
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);