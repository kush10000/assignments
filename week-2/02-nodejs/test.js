const fs = require('fs')

const dirpath = 'files'
  const files =  fs.readdir(dirpath, function(err,data){
    console.log({ data });
  });