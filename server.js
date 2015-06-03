var express = require('express');

var app = module.exports.app = exports.app = express();

// app.use(require('connect-livereload')());
app.use('/', express.static(__dirname + '/source'));
// app.use('/assets', express.static(__dirname + '/source/assets'));
app.use(express.static(__dirname + '/source'));

app.listen(3000);