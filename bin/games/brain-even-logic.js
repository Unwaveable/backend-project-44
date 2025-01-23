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

export function playBrainEven() {
  const userName = getAndPrintUserName();
  printGameRules('Answer "yes" if the number is even, otherwise answer "no".');

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    let num = makeRandomNum(1, 100);
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
