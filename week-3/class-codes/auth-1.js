const express = require("express");

const app = express();

const port = 3000;

app.get("/checkup", (req,res) => {
    const username = req.headers.username;
    const password = req.headers.passwords;
    const kidneyId = req.query.kidneyId;

    if(username != 'kush' || password != 'shaurilli'){
        if(kidneyId !=1 && kidneyId!=2){
            res.status(400).send("something's up with your inputs")
        }
    }
    
    res.json({
        msg:'your kidneys are fine'
    })
});

app.listen(port);