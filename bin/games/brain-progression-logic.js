import { makeRandomNum, gameEngine } from "../src/index.js";

export function playBrainProgression() {
  const gameRules = "What number is missing in the progression?";
  gameEngine(gameRules, gameLogic);
}

function gameLogic() {
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
  const correctAsnw = {
    question: `Question: ${progressionArray.join(" ")}`,
    answer: correctAnswer,
  };
  return correctAsnw;
}