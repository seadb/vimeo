var express = require('express');
var path = require('path');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var host = 'localhost';
var port = 8080;
app.listen(port, host, () => {
  console.log('Example app listening at '+ host + ':' + port);
});
