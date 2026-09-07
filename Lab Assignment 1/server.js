// server.js
// Basic HTTP server using the built-in http module

import http from 'http';
import logger from './modules/logger.js';

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to Node Server');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact Page');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  logger(`Server is running at http://localhost:${PORT}/`);
});
