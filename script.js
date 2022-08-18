

function computerPlay() {
    const myArray = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*myArray.length);
    const computerChoice = myArray[randomChoice];
    return computerChoice;
}    
let pointArray = [0, 0, 0];

let dude = '';

const btn1 = document.querySelector('.choice1');
btn1.addEventListener('click', () => {
    playerChoice = "ROCK";
    playRound();
    game();
    let output = document.getElementById("score");
    output.innerHTML = pointArray;} )
    
const btn2 = document.querySelector('.choice2');
btn2.addEventListener('click', () => {
    playerChoice = "PAPER";
    playRound()
    game();
    let output = document.getElementById("score");
    output.innerHTML = pointArray;} )

const btn3 = document.querySelector('.choice3');
btn3.addEventListener('click', () => {
    playerChoice = "SCISSORS";
    playRound();
    game();
     let output = document.getElementById("score");
    output.innerHTML = pointArray;} )


function playRound(playerSelection) {
    playerSelection = playerChoice;
    console.log(playerSelection); 
    console.log(computerSelection = computerPlay().toUpperCase());


    if (playerSelection == computerSelection) {
        console.log("It is a draw!");
        pointArray[2] += 1;

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

    console.log(pointArray);

}    

function game() {

    if (pointArray[0] > pointArray[1] && pointArray[0] == 5) {
            alert("Player has won!");
    }   else if (pointArray[0] < pointArray[1] && pointArray[1] == 5) {
            alert("Computer has won!");
    }
    
}
 
