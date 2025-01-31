import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function doCalc(params, op) {
  let result;
  switch (op) {
    case '+':
      result = params[0] + params[1];
      break;
    case '-':
      result = params[0] - params[1];
      break;
    case '*':
      result = params[0] * params[1];
      break;
    default:
      throw new Error(`'${op} operation is not supported!`);
  }
  return result;
}

function calcGame(context, showGameRules) {
  if (showGameRules) {
    context.output('What is the result of the expression?');
    return true;
  }
  const operations = ['+', '-', '*'];
  const op = operations[getRandomNumber(3) - 1];

  const maxNumber = op === '*' ? 10 : 30;
  const params = Array.from({ length: 2 }, () => getRandomNumber(maxNumber));

  let correctAnswer = doCalc(params, op);
  correctAnswer = correctAnswer.toString();

  showQuestion(context, `${params[0]} ${op} ${params[1]}`);
  const answer = askUserAnswer(context);

  return isUserAnswerCorrect(context, answer, correctAnswer);
}

export { calcGame };
