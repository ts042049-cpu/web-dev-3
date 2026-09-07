// modules/logger.js
// Custom module that logs messages with a timestamp (Bonus: timestamp logs)

// ANSI color codes (Bonus: colored terminal output)
const COLORS = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
};

function logger(message) {
  const timestamp = new Date().toISOString();
  console.log(`${COLORS.green}[LOG]${COLORS.reset} ${COLORS.yellow}${timestamp}${COLORS.reset} - ${message}`);
}

export default logger;
