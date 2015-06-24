////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    var result;
    
    while (playerWins < 5 && computerWins < 5) {
    result = getWinner(getPlayerMove(), getComputerMove());
    
    if (result === 'player') {
    playerWins++;
    console.log("Player won!");
    } else if (result === 'computer') {
    computerWins++;
    console.log("Computer won.")
    } else {
    console.log("It's a tie!");
    }
    console.log("The score is currently Player:" + playerWins + " and Computer:" + computerWins + ".");
    }
    var win;
    if (playerWins > computerWins) {
        win = "Player";
    } else {
        win = "Computer";
    }
    console.log("The " + win + " is the winner! The final score is:");
    return [playerWins, computerWins];
}

playToFive();