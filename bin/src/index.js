import readlineSync from "readline-sync";

export const correctAnswersToWin = 3;
export let countUserWins = 0;

export function printGameRules(rules) {
  console.log(rules);
}

export function askUserAnswer() {
  let userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
}

export function checkUserAnswer(userAnswer, correctAnswer, userName) {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    countUserWins += 1;
    return true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
    );
    return false;
  }
}

export function userWin(userName) {
  if (countUserWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export function makeRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
