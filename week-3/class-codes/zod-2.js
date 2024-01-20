const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.string());


//if this is an array of strings with atleast 1 input, return true else return false
//remember zod is an individual library 
//on zod documentation you can find constructs on how to check for different stuff(use ai for this)
 

const port = 3000;

app.use(express.json())

app.post("/health-checkup",(req,res)=>{

    const kidneys = req.body['kidneys'];
    const kidneyLength = kidneys.length;

    const response = schema.safeParse(kidneys)

    res.send({response});
});

app.listen(port);