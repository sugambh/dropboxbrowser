
/**
 * Module dependencies.
 */

var express = require('express');
var session = require('express-session');
var routes = require('./routes');
var main = require('./routes/main');
var db1 = require('./routes/db1');
var test=require('./routes/test')
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(session({secret: 'ssshhhhh'}));
app.use(app.router);
var user_session;

app.get('/', routes.index);
app.get('/main', main.list);
app.get('/db1',db1.list);
app.get('/test/*',test.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
