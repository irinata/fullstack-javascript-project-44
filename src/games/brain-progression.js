import {
  showQuestion, askUserAnswer, isUserAnswerCorrect, getRandomNumber,
} from '../index.js';

function getNewProgression() {
  const minProgressionLen = 5;
  const maxProgressionLen = 10;
  const maxProgressionDifference = 10;
  const maxFirstTerm = 20;

  const progLength = maxProgressionLen - (getRandomNumber(minProgressionLen + 1) - 1);
  const progDiff = getRandomNumber(maxProgressionDifference);
  const firstTerm = getRandomNumber(maxFirstTerm);

  const progression = [];
  for (let n = 1; n <= progLength; n++) {
    progression.push(firstTerm + (n - 1) * progDiff);
  }
  return progression;
}

function progressionGame(context, showGameRules) {
  if (showGameRules) {
    context.output('What number is missing in the progression?');
    return true;
  }
  const progression = getNewProgression();

  const removeIndex = getRandomNumber(progression.length) - 1;
  const partBeforeDots = progression.slice(0, removeIndex);
  const partAfterDots = progression.slice(removeIndex + 1);

  const param = `${partBeforeDots.join(' ')} .. ${partAfterDots.join(' ')}`;

  let correctAnswer = progression[removeIndex];
  correctAnswer = correctAnswer.toString();

  showQuestion(context, param);
  const answer = askUserAnswer(context);

  return isUserAnswerCorrect(context, answer, correctAnswer);
}

export { progressionGame };
