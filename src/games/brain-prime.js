import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function isPrime(number) {
  if (number < 2) return false;
  
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
  const maxNumber = 50;
  const number = getRandomNumber(maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  showQuestion(context, number);
  const answer = askUserAnswer(context);

  return isUserAnswerCorrect(context, answer, correctAnswer);
}

export { primeGame };
