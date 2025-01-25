import { makeRandomNum, gameEngine } from "../src/index.js";

function findNod(firstRandomNum, secondRandomNum) {
  if (secondRandomNum !== 0) {
    const k = firstRandomNum % secondRandomNum;
    return findNod(secondRandomNum, k);
  }
  return firstRandomNum.toString();
}

function gameLogic() {
  const firstRandomNum = makeRandomNum(1, 15);
  const secondRandomNum = makeRandomNum(1, 15);

  const correctAsnw = {
    question: `Question: ${firstRandomNum} ${secondRandomNum}`,
    answer: findNod(firstRandomNum, secondRandomNum),
  };
  return correctAsnw;
}

export default function playBrainGcd() {
  const gameRules = 'Find the greatest common divisor of given numbers';
  gameEngine(gameRules, gameLogic);
}
