const fs = require('fs')

filepath = 'sample.txt'

let s = "";

fs.readFile(filepath , 'utf-8' ,(err,data) =>
{
    s = data;


    s = s.replace(/  +/g, ' ');

fs.writeFile(filepath, s, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  });
});