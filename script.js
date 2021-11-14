//ask user to choose rock/paper/scissors
//change input to uppercase for case check
//check if user chose one of the 3 options else inform them that the input is incorrect.
let userInput = prompt("Rock, Paper, or Scissors?", "");

function checkInput(userChoice) {
  userChoice = userChoice.toUpperCase();
  if (
    userChoice === "ROCK" ||
    userChoice === "PAPER" ||
    userChoice === "SCISSORS"
  ) {
    return true;
  } else {
    return false;
  }
}
checkInput(userInput);

while (checkInput(userInput) === false) {
  alert("Incorrect Input!");
  userInput = prompt("Rock, Paper, or Scissors?", "");
  checkInput(userInput);
}
//create random computer variable for rock/paper/scissors and inform user
const choices = ["Rock", "Paper", "Scissors"];
let randomNum = Math.floor(Math.random() * choices.length);
let opponent = choices[randomNum];
alert(`The computer chose ${opponent}`);

// compare user variable to computer variable and inform user of the result
function determineWinner(user, computer) {
  user = user.toUpperCase();
  computer = computer.toUpperCase();
  if (user === computer) {
    return alert("It's a tie!");
  } else if (
    (user === "ROCK" && computer === "SCISSORS") ||
    (user === "SCISSORS" && computer === "PAPER") ||
    (user === "PAPER" && computer === "ROCK")
  ) {
    return alert("You win!");
  } else {
    return alert("You lost!");
  }
}
determineWinner(userInput, opponent);
