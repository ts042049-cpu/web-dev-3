// fileManager.js
// File Manager using the fs module - Create, Read, Update, Delete

import fs from 'fs';
import logger from './modules/logger.js';

const filePath = './test.txt';

// 1. Create File
function createFile() {
  logger('Creating File...');
  fs.writeFile(filePath, 'Hello Node.js', (err) => {
    if (err) {
      console.log('Error creating file:', err.message);
      return;
    }
    logger('File Created');
    readFile();
  });
}

// 2. Read File
function readFile() {
  logger('Reading File');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err.message);
      return;
    }
    console.log(data);
    updateFile();
  });
}

// 3. Update File (append data)
function updateFile() {
  fs.appendFile(filePath, '\nLearning FS Module', (err) => {
    if (err) {
      console.log('Error updating file:', err.message);
      return;
    }
    logger('File Updated');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err.message);
        return;
      }
      console.log(data);
      deleteFile();
    });
  });
}

// 4. Delete File
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      // Handle missing file errors gracefully
      console.log('Error deleting file (it may not exist):', err.message);
      return;
    }
    logger('File Deleted');
  });
}

// Run the full CRUD demo
createFile();
