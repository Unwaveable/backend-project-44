import { makeRandomNum, gameEngine } from '../src/index.js';

function gameLogic() {
  const progressionLength = makeRandomNum(5, 10);
  const firstArrayNum = makeRandomNum(0, 20);
  const progressionStep = makeRandomNum(1, 5);
  const progressionArray = [firstArrayNum];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  const hiddenItem = Math.floor(Math.random() * progressionArray.length);
  const correctAnswer = progressionArray[hiddenItem].toString();
  progressionArray[hiddenItem] = '..';
  const correctAsnw = {
    question: `Question: ${progressionArray.join(' ')}`,
    answer: correctAnswer,
  };
  return correctAsnw;
}

export default function playBrainProgression() {
  const gameRules = 'What number is missing in the progression?';
  gameEngine(gameRules, gameLogic);
}
