const express = require('express');
const BodyParser = require('body-parser');

const app = express();

function md1 (req, res, next){
    console.log(req.body)
    console.log("md1");
    next('router');
}

function md2 (req, res, next){
    console.log("md2");
    next();
}

function md3 ( req, res, next){
    console.log("md3");
    res.end('done');
}


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));

app.use(md1);
app.use(md2);
app.use(md3)

app.listen(8888)
