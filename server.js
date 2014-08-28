'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static( __dirname +( process.env.PUBLIC_DIR || '/public')));

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server kickin\' it on ' + app.get('port'));
});

