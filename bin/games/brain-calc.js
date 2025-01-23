#!/usr/bin/env node
import { getAndPrintUserName } from "../src/cli.js";
import {
  correctAnswersToWin,
  askUserAnswer,
  printGameRules,
  checkUserAnswer,
  countUserWins,
  userWin,
  makeRandomNum,
} from "../src/index.js";

playBrainCalc();

function playBrainCalc() {
  const userName = getAndPrintUserName();
  printGameRules("What is the result of the expression?");

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    let calculationDigit = ["-", "+", "*"];
    let randomDigit = calculationDigit[makeRandomNum(0, 2)];
    let firstRandomNum = makeRandomNum(0, 10);
    let secondRandomNum = makeRandomNum(0, 10);

    console.log(
      `Question: ${firstRandomNum} ${randomDigit} ${secondRandomNum}`
    );

    let userAnswer = askUserAnswer();
    let correctAnswer = resultOfOperation(
      firstRandomNum,
      secondRandomNum,
      randomDigit
    ).toString();

    let userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}

function resultOfOperation(num1, num2, digit) {
  switch (digit) {
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
  }
}