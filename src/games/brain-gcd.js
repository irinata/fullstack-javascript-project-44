import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function findGcd(params) {
  const [param1, param2] = params;
  const minParam = param1 < param2 ? param1 : param2;

  let result = 1;
  for (let i = minParam; i >= 2; i--) {
    if ((param1 % i === 0) && (param2 % i === 0)) {
      result = i;
      break;
    }
  }
  return result;
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
