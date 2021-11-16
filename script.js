//ask user to choose rock/paper/scissors
//change input to uppercase for case check
//check if user chose one of the 3 options else inform them that the input is incorrect.

function humanPlay() {
  let userInput = prompt("Rock, Paper, or Scissors?", "");
  checkInput(userInput);
  while (checkInput(userInput) === false) {
    alert("Incorrect Input!");
    userInput = prompt("Rock, Paper, or Scissors?", "");
    checkInput(userInput);
  }
  return userInput;
}

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

//create random computer variable for rock/paper/scissors and inform user
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}
// compare user variable to computer variable and inform user of the result
function determineWinner(user, computer) {
  user = user.toUpperCase();
  computer = computer.toUpperCase();
  if (user === computer) {
    tiedGames.push(1);
    return alert("It's a tie!");
  } else if (
    (user === "ROCK" && computer === "SCISSORS") ||
    (user === "SCISSORS" && computer === "PAPER") ||
    (user === "PAPER" && computer === "ROCK")
  ) {
    scoreUser.push(1);
    return alert(
      `You win, ${user.toLowerCase()} beats ${computer.toLowerCase()}!`
    );
  } else {
    scoreComputer.push(1);
    return alert(
      `You lose, ${computer.toLowerCase()} beats ${user.toLowerCase()}!`
    );
  }
}
let tiedGames = [];
let scoreUser = [];
let scoreComputer = [];

for (let i = 1; i <= 5; i++) {
  alert(`Round: ${i}`);
  determineWinner(humanPlay(), computerPlay());
}

function overallWinner(scoreOne, scoreTwo, scoreThree) {
  if (scoreOne.length > scoreTwo.length) {
    return alert(`You are a winner! 
    You: ${scoreOne.length} 
    Computer: ${scoreTwo.length} 
    Tied Games: ${scoreThree.length}`);
  } else if (scoreOne.length < scoreTwo.length) {
    return alert(`You are a loser! 
    You: ${scoreOne.length} 
    Computer: ${scoreTwo.length} 
    Tied Games: ${scoreThree.length}`);
  } else {
    return alert(`It's a tie! 
    You: ${scoreOne.length} 
    Computer: ${scoreTwo.length} 
    Tied Games: ${scoreThree.length}`);
  }
}
overallWinner(scoreUser, scoreComputer, tiedGames);
