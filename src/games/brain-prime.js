import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function primeGame(context, showGameRules) {
  if (showGameRules) {
    context.output('Answer "yes" if given number is prime. Otherwise answer "no".');
    return true;
  }
  const maxNumber = 49;
  const number = getRandomNumber(maxNumber) + 1; // to avoid 1 as result
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  showQuestion(context, number);
  const answer = askUserAnswer(context);

  return isUserAnswerCorrect(context, answer, correctAnswer);
}

export { primeGame };
