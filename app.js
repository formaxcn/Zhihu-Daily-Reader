var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var favicon = require('serve-favicon');
var jade = require('jade');
var logger = require('morgan');
var path = require('path');

var app = express();

// favicon setup
app.use(favicon(path.join(__dirname, 'app/common/images/favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
  extended: false
}));
app.use(cookieParser());

var routes = require('./config/routes');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next)
{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
var resolver = require('./lib/path-resolver')(path.join(__dirname,
  'app/common'));

// development error handler will print stacktrace
// production error handler no stacktraces leaked to user
if (app.get('env') === 'development')
{
  app.use(function (err, req, res, next)
  {
    res.status(err.status || 500);

    var fn = jade.compileFile(resolver.resolve('error.jade'));
    res.write(fn(
    {
      message: err.message,
      error: err
    }));
    res.end();
  });
}
else
{
  app.use(function (err, req, res, next)
  {
    res.status(err.status || 500);

    var fn = jade.compileFile(resolver.resolve('error.jade'));
    res.write(fn(
    {
      message: err.message,
      error:
      {}
    }));
    res.end();
  });
}

module.exports = app;
