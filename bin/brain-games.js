#!/usr/bin/env node

import * as cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = cli.askQuestion('May I have your name? ');
console.log(`Hello, ${userName}!`);
