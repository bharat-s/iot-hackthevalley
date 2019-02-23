var express = require('express');
var app = express();
var trial = 'test';

app.get('/',function(req, res) {
    res.send(trial)
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});