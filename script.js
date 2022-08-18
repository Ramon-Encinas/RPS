

function computerPlay() {
    const myArray = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*myArray.length);
    const computerChoice = myArray[randomChoice];
    return computerChoice;
}

let pointArray = [0, 0];


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection = prompt("Choose your move: ").toUpperCase());
    console.log(computerSelection = computerPlay().toUpperCase());



    if (playerSelection == computerSelection) {
        console.log("It is a draw!");

    }   else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("Computer wins!, Paper beats Rock!");
        pointArray[1] += 1;

    }   else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("Player wins!, Rock beats Scissors!");
        pointArray[0] += 1;

    }   else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("Player wins!, Paper beats Rock!");
        pointArray[0] += 1;

    }   else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("Computer wins!, Scissors beats Paper!");
        pointArray[1] += 1;

    }   else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("Player wins!, Scissors beats Paper!");
        pointArray[0] += 1;

    }   else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("Computer wins!, Rock beats Scissors!");
        pointArray[1] += 1;

    }   else { 
        console.log("Error, player choice is not valid: Please type in 'rock', 'paper' or 'scissors'");
    }

    console.log(pointArray)
}

function game() {

    for (let i = 0; i < 5; i++) {
        playRound()
    }

    if (pointArray[0] > pointArray[1]) {
        alert("Player has won!")
    }   else if (pointArray[0] < pointArray[1]) {
        alert("Computer has won!")
    }   else {
        alert("No one won!")
    }

}

console.log(game())




