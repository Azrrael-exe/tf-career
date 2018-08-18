var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path');

var app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('common'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var index = require('./routes/index')
app.use('/', index)

var api = require('./routes/api')
app.use('/api', api)

module.exports = app;