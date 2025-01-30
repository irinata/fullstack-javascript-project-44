#!/usr/bin/env node

import getGameContext from '../src/context.js';
import evenNumberGame from '../src/brain-even.js';

console.log('Welcome to the Brain Games!');

const gameContext = getGameContext();
evenNumberGame(gameContext);