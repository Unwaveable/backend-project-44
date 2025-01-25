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

export function playBrainPrime() {
  const userName = getAndPrintUserName();
  printGameRules('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (countUserWins; countUserWins < correctAnswersToWin; ) {

    let numToQuess = makeRandomNum(2, 20);
    let correctAnswer = isPrime(numToQuess);

    console.log(`Question: ${numToQuess}`);
    
    let userAnswer = askUserAnswer();
    let userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}

function isPrime(numToQuess) {
    for (let i = 2; i < numToQuess; i++) {
      if (numToQuess % i === 0) return 'no';
    }
    return 'yes';
  }