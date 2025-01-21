#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getAndPrintUserName } from "./src/cli.js";

const correctAnswersToWin = 3;

const userName = getAndPrintUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let countUserWins = 0; countUserWins < correctAnswersToWin; ) {
  let num = Math.floor(Math.random() * 101);
  console.log(`Question: ${num}`);
  let userAnswer = readlineSync.question("Your answer: ");
  let correctAnswer = num % 2 === 0 ? "yes" : "no";

  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    countUserWins += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's' try again, ${userName}!`
    );
    break;
  }
  if (countUserWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}