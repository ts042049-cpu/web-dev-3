# Smart Utility Toolkit (ES Module version)

This version uses `import` / `export` instead of `require` / `module.exports`,
because the project's `package.json` has `"type": "module"`.

## Files
- `calculator.js` - CLI calculator using process.argv
- `app.js` - Demonstrates custom module reuse (isEven + logger)
- `server.js` - Basic HTTP server with routes (/, /about, /contact, 404)
- `fileManager.js` - CRUD file operations using fs module
- `dice.js` - Random dice generator using crypto module
- `modules/isEven.js` - Custom module: checks even/odd
- `modules/logger.js` - Custom module: logs messages with timestamp + color

## How to Run
1. `node calculator.js add 10 5`
2. `node app.js`
3. `node server.js` (visit http://localhost:3000/, /about, /contact)
4. `node fileManager.js`
5. `node dice.js`

## Important
Your `package.json` must contain `"type": "module"` for these files to work
(that's what makes Node treat `.js` files as ES Modules).
