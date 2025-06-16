#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { calcGame } from '../src/games/brain-calc.js'

runGame(calcGame)
