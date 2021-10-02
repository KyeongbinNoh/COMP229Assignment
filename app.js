/*File name:app.js*/
/*Name : Kyeongbin Noh*/
/*StudentID: 301130132*/
/*Date : OCT 1*/
//installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

//a 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// b 

app.use(function(req, res, next) {
  next(createError(404));
});

// c 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // d 
  res.status(err.status || 500);
  res.render('error',{ title: "Error"});
});

module.exports = app;
