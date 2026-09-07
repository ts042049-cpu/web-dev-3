// app.js
// Demonstrates reusing custom modules (isEven + logger) in another file

import isEven from './modules/isEven.js';
import logger from './modules/logger.js';

logger('Starting module reusability demo...');

const numbers = [4, 7, 10, 13, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    logger(`${num} is Even`);
  } else {
    logger(`${num} is Odd`);
  }
});

logger('Demo finished.');
