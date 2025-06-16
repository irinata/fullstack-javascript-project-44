import { askQuestion } from './cli.js'

function output(msg) {
  console.log(msg)
}

function askUser(question) {
  return askQuestion(question)
}

function createGameContext() {
  return {
    username: undefined,
    output,
    askUser,
    attemptsNumber: 3,
  }
}

export { createGameContext }
