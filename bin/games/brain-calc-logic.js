import { makeRandomNum, gameEngine } from "../src/index.js";

export function playBrainCalc() {
  const gameRules = "What is the result of the expression?";
  gameEngine(gameRules, gameLogic);
}

function gameLogic() {
  const calculationDigit = ["-", "+", "*"];
  const randomDigit = calculationDigit[makeRandomNum(0, 2)];
  const firstRandomNum = makeRandomNum(0, 10);
  const secondRandomNum = makeRandomNum(0, 10);

  const correctAsnw = {
    question: `Question: ${firstRandomNum} ${randomDigit} ${secondRandomNum}`,
    answer: resultOfOperation(firstRandomNum, secondRandomNum, randomDigit)};

  return correctAsnw;
}

function resultOfOperation(num1, num2, digit) {
  switch (digit) {
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
  }
}
