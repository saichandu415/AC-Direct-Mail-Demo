var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var transporter = nodemailer.createTransport({
  "host": "smtpdm-ap-southeast-2.aliyun.com",
  "port": 25,
  "secureConnection": false, // use SSL
  "auth": {
    "user": 'admin@mail.actestdomain.xyz', // user name
    "pass": 'AdMin12345'
  }
});

app.post('/sendMail', function (req, res, next) {

  var reqBody = req.body;

  var mailOptions = {
    from: 'admin@mail.actestdomain.xyz', // sender address mailfrom must be same with the user.
    to: reqBody.email_inline, // list of receivers
    cc: '', // copy for receivers
    bcc: '', // secret copy for receivers
    subject: reqBody.subject, // Subject line
    text: '', // plaintext body
    html: reqBody.body // html body
  };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.send('');
  });


});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
