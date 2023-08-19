"use strict";
// define querySelector
let message = document.querySelector(".message");
let score = document.querySelector(".score");

// generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// show secret number for testing
document.querySelector(".number").textContent = secretNumber;

let scorePoints = 20;
let highscore = 0;

// check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    message.textContent = "No number!";

    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = "Correct Number!";

    // change background color to green
    document.querySelector("body").style.backgroundColor = "#60b347";
    // change width of number box
    document.querySelector(".number").style.width = "300px";

    if (scorePoints > highscore) {
      highscore = scorePoints;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (scorePoints > 1) {
      message.textContent = "Too high!";
      scorePoints--;
      score.textContent = scorePoints;
    } else {
      score.textContent = 0;
      message.textContent = "You lost the game!";
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (scorePoints > 1) {
      message.textContent = "Too low!";
      scorePoints--;
      score.textContent = scorePoints;
    } else {
      score.textContent = 0;
      message.textContent = "You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scorePoints = 20;
  score.textContent = scorePoints;
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "150px";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
});
