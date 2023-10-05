// QUESTION - 3.1

const fs = require('fs');
const path = require('path');

const LogsDirectory = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(LogsDirectory)) {
  fs.readdirSync(LogsDirectory).forEach((file) => {
    const filePath = path.join(LogsDirectory, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${file}`);
  });

  // Remove the Logs directory itself
  fs.rmdirSync(LogsDirectory);
  console.log(`Deleted directory: Logs`);
} else {
  console.log('Logs directory does not exist.');
}