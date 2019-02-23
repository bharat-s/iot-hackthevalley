var express = require('express');
var app = express();
var trial = 'test';

app.get('/', function(req, res) {
    res.send(trial) //need data from some function from server-side code to be returned to user here (like some variable that can be referenced).
});