const express = require("express");

const app = express();

const port = 3000;

app.use(express.json())

app.post("/health-checkup",(req,res)=>{

    const kidneys = req.body['kidneys'];
    const kidneyLength = kidneys.length;

    res.send("you have "+kidneyLength+" kidneys")
});

app.listen(port);