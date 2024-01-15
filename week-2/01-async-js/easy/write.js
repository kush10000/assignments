const fs = require('fs');

const filePath = 'sample.txt'

let data = 'hey'

fs.writeFile(filePath, 'whassup', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  });