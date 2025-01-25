import { makeRandomNum, gameEngine } from "../src/index.js";

export function playBrainEven() {
  const gameRules =
    'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(gameRules, makeQuestion, makeCorrectAnswer);
}

function makeQuestion() {
  return makeRandomNum(1, 100);
}

function makeCorrectAnswer() {
  return makeQuestion % 2 === 0 ? "yes" : "no";
}
