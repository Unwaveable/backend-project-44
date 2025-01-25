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

export function playBrainProgression() {
  const userName = getAndPrintUserName();
  printGameRules("What number is missing in the progression?");

  for (countUserWins; countUserWins < correctAnswersToWin; ) {
    const progressionLength = makeRandomNum(5, 10);
    const firstArrayNum = makeRandomNum(0, 20);
    const progressionStep = makeRandomNum(1, 5);
    const progressionArray = [firstArrayNum];

    for (let i = 0; i < progressionLength - 1; i += 1) {
      progressionArray.push(progressionArray[i] + progressionStep);
    }

    let hiddenItem = Math.floor(Math.random() * progressionArray.length);
    let correctAnswer = progressionArray[hiddenItem].toString();
    progressionArray[hiddenItem] = "..";

    console.log(`Question: ${progressionArray.join(' ')}`);

    let userAnswer = askUserAnswer();
    let userCanPlay = checkUserAnswer(userAnswer, correctAnswer, userName);
    if (!userCanPlay) {
      break;
    }
  }
  userWin(userName);
}
