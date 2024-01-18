const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',function(req,res){

  
  res.send('hi')
})

app.get('/files/')

app.listen(port)