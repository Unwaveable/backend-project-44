import readlineSync from "readline-sync";

export function getAndPrintUserName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}