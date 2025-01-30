import * as cli from '../src/cli.js';

function getGameContext() {
    const userName = cli.askQuestion('May I have your name? ');

    return {
        username: userName,
    }
}

export {getGameContext as default};