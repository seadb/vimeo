var express = require('express');
var path = require('path');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

if (!process.env.NODE_ENV) {
  throw new Error("Please set NODE_ENV to 'development' or 'production'");
}

app.listen(8080, 'localhost', () => {
  console.log('Example app listening at '+ host + ':' + port);
});
