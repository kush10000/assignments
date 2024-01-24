const express = require('express')
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' allows any origin, replace with specific origin if needed
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }); 

app.get('/sum', (req,res) =>{
    let a = req.query.a;
    let b = req.query.b;
    if (!a || !b || isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        return res.status(400).send('Invalid parameters');
      }

    
    let c = parseInt(a) + parseInt(b);
    res.send(c.toString());
})

app.get('/interest', (req,res) =>{
    let a = req.query.principal;
    let b = req.query.rate;
    let c = req.query.time;
    if (!a || !b || !c|| isNaN(parseInt(a)) || isNaN(parseInt(b) || isNaN(parseInt(c)))) {
        return res.status(400).send('Invalid parameters');
      }

    
    let d = (parseInt(a) * parseInt(b) / 100)*parseInt(c);
    let e = parseInt(a) + d;
    res.json({
        'total' : d.toString(),
        "interest" : e.toString()
    });
})

app.listen(port)