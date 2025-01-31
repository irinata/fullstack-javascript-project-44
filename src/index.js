import { createGameContext } from './context.js';

function getRandomNumber(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}

function showWelcomeMsg(ctx) {
  ctx.output('Welcome to the Brain Games!');
}

function showQuestion(ctx, param) {
  ctx.output(`Question: ${param}`);
}

function askUserAnswer(ctx) {
  return ctx.askUser('Your answer: ');
}

function isUserAnswerCorrect(ctx, userAnswer, correctAnswer) {
  let result = true;
  if (userAnswer === correctAnswer) {
    ctx.output('Correct!');
  } else {
    ctx.output(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    ctx.output(`Let's try again, ${ctx.userName}!`);
    result = false;
  }
  return result;
}

function runGame(game) {
  const ctx = createGameContext();
  ctx.output('Welcome to the Brain Games!');

  ctx.userName = ctx.askUser('May I have your name? ');
  ctx.output(`Hello, ${ctx.userName}!`);

  const showGameRules = true;
  game(ctx, showGameRules);

  for (let i = 0; i < ctx.attemptsNumber; i++) {
    const result = game(ctx);
    if (!result) return;
  }
  console.log(`Congratulations, ${ctx.userName}!`);
}

export {
  getRandomNumber, showWelcomeMsg, showQuestion,
  askUserAnswer, isUserAnswerCorrect, runGame,
};
