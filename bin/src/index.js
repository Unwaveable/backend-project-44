import readlineSync from "readline-sync";
import { getAndPrintUserName } from "./cli.js";

export const correctAnswersToWin = 3;
export let countUserWins = 0;

export function gameEngine(gameRules, makeQuestion, makeCorrectAnswer) {
  const userName = getAndPrintUserName();
  printGameRules(gameRules);

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    const question = makeQuestion();
    const answer = makeCorrectAnswer();

    console.log(`Question: ${question}`);

    let userAnswer = askUserAnswer();

    let userCanPlay = checkUserAnswer(userAnswer, answer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}

function printGameRules(rules) {
  console.log(rules);
}

function askUserAnswer() {
  let userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
}

function checkUserAnswer(userAnswer, answer, userName) {
  if (userAnswer === answer) {
    console.log("Correct!");
    countUserWins += 1;
    return true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`
    );
    return false;
  }
}

function userWin(userName) {
  if (countUserWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export function makeRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
