// QUESTION - 3.2

const fs = require('fs');
const path = require('path');

const LogsDirectory = path.join(__dirname, 'Logs');

// Create the Logs directory if it does not exist
if (!fs.existsSync(LogsDirectory)) {
  fs.mkdirSync(LogsDirectory);
}
process.chdir(LogsDirectory);

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const content = `This is log file ${i}.`;

  fs.writeFileSync(fileName, content);
  console.log(`Created file: ${fileName}`);
}