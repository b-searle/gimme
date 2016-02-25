var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.render('../client/index.ejs', {});
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port);
