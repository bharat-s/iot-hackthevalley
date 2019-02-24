var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var trial = 7;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function(req, res) {
    res.json({ data: trial });
});

app.get('/example', (req, res) => {
    res.json({ data: 'bai world' });
});

app.post('/example', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});

