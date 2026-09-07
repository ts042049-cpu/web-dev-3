// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

import logger from './modules/logger.js';

// process.argv[0] = node path, [1] = file path, [2] = operation, [3] & [4] = numbers
const args = process.argv.slice(2);

if (args.length < 3) {
  console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

logger(`Received operation: ${operation}, num1: ${num1}, num2: ${num2}`);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Error: Please provide valid numbers.');
  process.exit(1);
}

let result;

switch (operation) {
  case 'add':
    result = num1 + num2;
    break;
  case 'sub':
    result = num1 - num2;
    break;
  case 'mul':
    result = num1 * num2;
    break;
  case 'div':
    if (num2 === 0) {
      console.log('Error: Cannot divide by zero.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Error: Invalid operation "${operation}". Use add, sub, mul, or div.`);
    process.exit(1);
}

console.log(`Result: ${result}`);
