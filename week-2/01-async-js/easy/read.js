const fs = require('fs');

const filePath = '4-write-to-file.md'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    // Process the file data
    console.log('File content:', data);

  });


    let sum =0;
    for(let i=0;i<10000000000;i++){
        sum+=i;
  }

  for(let i=0;i<10000000000;i++){
    sum+=i;}
