var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3000);
