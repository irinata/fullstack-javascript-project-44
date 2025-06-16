import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function findGcd(params) {
  const [param1, param2] = params;
  const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
  return getGcd(param1, param2);
}

function gcdGame(context, showGameRules) {
  if (showGameRules) {
    context.output('Find the greatest common divisor of given numbers.');
    return true;
  }
  const maxNumber = 50;
  const params = Array.from({ length: 2 }, () => getRandomNumber(maxNumber));

  let correctAnswer = findGcd(params);
  correctAnswer = correctAnswer.toString();

  showQuestion(context, params.join(' '));
  const answer = askUserAnswer(context);

  return isUserAnswerCorrect(context, answer, correctAnswer);
}

export { gcdGame };
