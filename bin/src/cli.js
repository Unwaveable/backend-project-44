import readlineSync from "readline-sync";

export const correctAnswersToWin = 3;

export function getAndPrintUserName() {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
}
