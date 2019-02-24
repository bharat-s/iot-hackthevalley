var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

const store = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function(req, res) {
    res.json({ data: store });
});

app.get('/:index', (req, res) => {
    res.json({ data: store[store.length - 1]});
});

app.post('/add', (req, res) => {
    store.push(req.body.count);
    console.log(req.body);
    res.json({ data: req.body.count });
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});

