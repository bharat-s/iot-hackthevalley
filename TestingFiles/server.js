var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var trial = '7';

app.get('/', function(req, res) {
    res.send(trial)
});

app.get("/room", function(req, res) {
    var numPeople = 6 // waiting for data to be inputted here
     res.json({
        numPeople: numPeople,
    })
})

app.use(bodyParser.urlencoded({ extended: true })); 

//app.get('/example', (req, res) => {
//    res.send('hello world')
//});

app.post('/example', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});

