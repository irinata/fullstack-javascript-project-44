import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js'

function isEven(number) {
  return number % 2 === 0
}

function evenNumberGame(context, showGameRules) {
  if (showGameRules) {
    context.output('Answer "yes" if the number is even, otherwise answer "no".')
    return true
  }
  const maxNumber = 100
  const number = getRandomNumber(maxNumber)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  showQuestion(context, number)
  const answer = askUserAnswer(context)

  return isUserAnswerCorrect(context, answer, correctAnswer)
}

export { evenNumberGame }
