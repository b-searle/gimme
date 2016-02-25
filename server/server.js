var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('../client/index.ejs', {});
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(process.env.PORT, process.env.IP); 