import readlineSync from 'readline-sync';

function askUserName(question = 'May I have your name? ') {
  return readlineSync.question(question);
}

export { askUserName };
