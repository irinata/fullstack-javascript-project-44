import * as cli from './cli.js';

function isEven(number) {
    return number % 2 === 0;
  }
  
function evenNumberGame(context) {
  const attemptsNumber = 3;
  const maxNumber = 100;
      
  const userName = context.username;
  console.log(`Hello, ${userName}!`);
  
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  let i = 0;
  while (i < attemptsNumber) {
    const number = Math.ceil(Math.random() * maxNumber);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
  
    console.log(`Question: ${number}`);  
    const answer = cli.askQuestion('Your answer: ');
      
    if (answer == expectedAnswer) {
      console.log('Correct!');
    }
    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  
    i++;
  }

  console.log(`Congratulations, ${userName}!`);
}

export {evenNumberGame as default};