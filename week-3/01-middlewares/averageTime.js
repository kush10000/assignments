const express = require('express');
const app = express();
const port = 3000;

//calculate the average time for executing requests.(2 middlewares will be used) 
let totalTime = 0;
let numberOfRequests = 0;

app.get('/',(req,res)=>{

})

app.listen(port);