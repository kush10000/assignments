const express = require("express");

const app = express();

const port = 3000;

function usermiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.passwords;

    if(username != 'kush' || password != 'shaurilli'){
        res.status(400).send("something's up with your inputs")
    }
    else
        next();
}

function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId !=1 && kidneyId!=2){
        res.status(400).send("something's up with your inputs")
    }
    else
    next();
}


app.get("/checkup", usermiddleware,kidneymiddleware,(req,res) => {
    res.json({
        msg:'your kidneys are fine'
    })
});

app.listen(port);