import readlineSync from "readline-sync";

export function getAndPrintUserName() {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
