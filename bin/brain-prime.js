#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { primeGame } from '../src/games/brain-prime.js';

runGame(primeGame);
