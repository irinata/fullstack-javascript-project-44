import readlineSync from 'readline-sync'

function askQuestion(question) {
  return readlineSync.question(question)
}

export { askQuestion }
