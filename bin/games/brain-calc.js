#!/usr/bin/env node
import { getAndPrintUserName } from "../src/cli.js";
import {
  correctAnswersToWin,
  askUserAnswer,
  printGameRules,
  checkUserAnswer,
  countUserWins,
  userWin,
} from "../src/index.js";

playBrainCalc();
const userName = getAndPrintUserName();

function playBrainCalc() {
  printGameRules("What is the result of the expression?");

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    let num = Math.floor(Math.random() * 101);
    console.log(`Question: ${num}`);

    let userAnswer = askUserAnswer();
    let correctAnswer = num % 2 === 0 ? "yes" : "no";

    let userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}
