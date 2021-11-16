//Gets user Input. If the input is incorrect requests it again.
function getUserInput() {
  let userInput = prompt("Rock, Paper, or Scissors?", "");
  checkUserInput(userInput);
  while (checkUserInput(userInput) === false) {
    alert("Incorrect Input!");
    userInput = prompt("Rock, Paper, or Scissors?", "");
    checkUserInput(userInput);
  }
  return userInput;
}
//Checks if user input is correct
function checkUserInput(userChoice) {
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

//create random computer input
function getComputerInput() {
  const options = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}
//Arrays to keep score of the games played
let tiedGames = [];
let scoreUser = [];
let scoreComputer = [];

// compare user variable to computer variable, inform user of the result, add result to the score arrays.
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
//Let's play alert
alert("Let's play Rock, Paper, Scissors!");
//Play the game 5 times
for (let i = 1; i <= 5; i++) {
  alert(`Round: ${i}`);
  determineWinner(getUserInput(), getComputerInput());
}
//Determine winner of the 5 games. Inform the user of the scores.
function determineOverallWinner(scoreOne, scoreTwo, scoreThree) {
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
determineOverallWinner(scoreUser, scoreComputer, tiedGames);
