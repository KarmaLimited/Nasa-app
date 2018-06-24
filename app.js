var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').load();

//The application server config and connection to database
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// using bluebird promises since mongoose promises have been deprecated
mongoose.connect(process.env.MONGOLAB_URI, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('db connection succesful...\n'), console.log(`live at: http://localhost:${process.env.PORT}`))
  .catch((err) => console.error(err));

var Verify = require('./routes/Verify');
var auth = require('./routes/auth');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/Verify', Verify);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('<h3>Well now you gone and done it, you broke the internet...</h3>'+ '<a href="/">Take me home</a><br/>' + 'the stack trace is viewable in terminal');
  console.log('Error stack: ', err.stack);
});
module.exports = app;