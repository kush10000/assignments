const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

/**
 get comfortable with writing the schemas
 */

const port = 3000;

app.use(express.json())

app.post("/health-checkup",(req,res)=>{

    const kidneys = req.body['kidneys'];
    const kidneyLength = kidneys.length;

    const response = schema.safeParse(kidneys)

    res.send({response});
});

app.listen(port);