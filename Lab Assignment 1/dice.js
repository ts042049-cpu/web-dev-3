// dice.js
// Random Dice Generator using the crypto module

import crypto from 'crypto';
import fs from 'fs';
import logger from './modules/logger.js';

// Number of rolls (change this to simulate more/less rolls)
const NUMBER_OF_ROLLS = 5;
const historyFile = './diceHistory.txt';

function rollDice() {
  // crypto.randomInt(min, max) -> generates a secure random integer,
  // min inclusive, max exclusive. So (1, 7) gives values 1-6.
  return crypto.randomInt(1, 7);
}

logger('Rolling the dice...');

const results = [];

for (let i = 1; i <= NUMBER_OF_ROLLS; i++) {
  const value = rollDice();
  results.push(value);
  console.log(`Dice Rolled: ${value}`);
}

// Bonus: Store dice roll history in a text file
const historyLine = `${new Date().toISOString()} - Rolls: [${results.join(', ')}]\n`;

fs.appendFile(historyFile, historyLine, (err) => {
  if (err) {
    console.log('Error saving dice history:', err.message);
    return;
  }
  logger('Dice roll history saved to diceHistory.txt');
});
