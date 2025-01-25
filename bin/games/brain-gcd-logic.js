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

export function playBrainGcd() {
  const userName = getAndPrintUserName();
  printGameRules("Find the greatest common divisor of given numbers.");

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    let firstRandomNum = makeRandomNum(1, 15);
    let secondRandomNum = makeRandomNum(1, 15);
    let correctAnswer = findNod(firstRandomNum, secondRandomNum);

    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    
    let userAnswer = askUserAnswer();
    let userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}

function findNod(firstRandomNum, secondRandomNum) {
  if (secondRandomNum !== 0) {
    const k = firstRandomNum % secondRandomNum;
    return findNod(secondRandomNum, k);
  }
  return firstRandomNum.toString();
}
