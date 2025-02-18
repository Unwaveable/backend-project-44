import { makeRandomNum, gameEngine } from '../src/index.js';

function gameLogic() {
  const correctNum = makeRandomNum(1, 100);
  const correctAsnw = {
    question: `Question: ${correctNum}`,
    answer: correctNum % 2 === 0 ? 'yes' : 'no',
  };

  return correctAsnw;
}

export default function playBrainEven() {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(gameRules, gameLogic);
}
