import { makeRandomNum, gameEngine } from "../src/index.js";

export function playBrainPrime() {
  const gameRules =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(gameRules, gameLogic);
}

function gameLogic() {
  const numToGuess = makeRandomNum(2, 20);
  const correctAsnw = {
    question: `Question: ${numToGuess}`,
    answer: isPrime(numToGuess),
  };
  return correctAsnw;
}

function isPrime(numToQuess) {
  for (let i = 2; i < numToQuess; i++) {
    if (numToQuess % i === 0) return "no";
  }
  return "yes";
}
