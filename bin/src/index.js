import readlineSync from 'readline-sync';
import getAndPrintUserName from './cli.js';

const correctAnswersToWin = 3;
let countUserWins = 0;

function printGameRules(rules) {
  console.log(rules);
}

function askUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

function checkUserAnswer(userAnswer, answer, userName) {
  if (userAnswer === answer) {
    console.log('Correct!');
    countUserWins += 1;
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
  return false;
}

function userWin(userName) {
  if (countUserWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export function gameEngine(gameRules, gameLogic) {
  const userName = getAndPrintUserName();
  printGameRules(gameRules);

  for (countUserWins; countUserWins < correctAnswersToWin;) {
    const makeLogic = gameLogic();
    const correctAnswer = makeLogic.answer.toString();

    console.log(makeLogic.question);

    const userAnswer = askUserAnswer();

    const userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}

export function makeRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
