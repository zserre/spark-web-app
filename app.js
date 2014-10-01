
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./app/routes');
var user = require('./app/routes/user');
var spark = require('./app/routes/spark');
var http = require('http');
var path = require('path');

var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mytestapp');

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/led1', spark.readLED1)
app.get('/led2', spark.readLED2)
app.get('/analog1', spark.readAnalog1)
app.post('/led1/:value', spark.writeLED1)
app.post('/led2/:value', spark.writeLED2)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
