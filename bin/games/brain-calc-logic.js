import { makeRandomNum, gameEngine } from '../src/index.js';

function resultOfOperation(num1, num2, digit) {
  let result = 0;
  switch (digit) {
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    default: result = 'Error';
  }
  return result;
}

function gameLogic() {
  const calculationDigit = ['-', '+', '*'];
  const randomDigit = calculationDigit[makeRandomNum(0, 2)];
  const firstRandomNum = makeRandomNum(0, 10);
  const secondRandomNum = makeRandomNum(0, 10);

  const correctAsnw = {
    question: `Question: ${firstRandomNum} ${randomDigit} ${secondRandomNum}`,
    answer: resultOfOperation(firstRandomNum, secondRandomNum, randomDigit),
  };

  return correctAsnw;
}

export default function playBrainCalc() {
  const gameRules = 'What is the result of the expression?';
  gameEngine(gameRules, gameLogic);
}
