const express = require('express')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const game = require('./lib.js')

const app = express();

app.get('/favicon.ico', function (requst, response) {
    response.status(200);
    response.send();
})
app.get('/', function (request, response) {
    response.status(200);
    fs.createReadStream(__dirname + '/index.html').pipe(response)
})
app.get('/game', function (request, response) {
    const query = request.query;
    const playAction = query.action;
    var gameResult = game(playAction)
    response.status(200);
    response.send(gameResult.toString())

})
app.listen(3000)
