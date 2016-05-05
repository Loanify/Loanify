var express= require('express');
var logger = require('morgan');
var app = express();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "philsinglewhitefemale@gmail.com",
        pass: "philco123"
    }
});
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var db = require('./db.js');
var router = express.Router();
var passport = require('passport');
var User = require('./models/user');
var session = require('express-session');
var flash    = require('connect-flash');
var router = require('./routes/user_routes');
var equipment_routes = require('./routes/equipment_routes');
var person_routes = require('./routes/person_routes');

//Configure view engine to render EJS templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Middleware
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use('/', router);
app.use('/equipment', equipment_routes);
app.use('/person', person_routes);

//nodemailer
app.get('/email',function(req,res){
res.render('email');
});
app.get('/send',function(req,res){
  var mailOptions={
   to : req.query.to,
   subject : req.query.subject,
   text : req.query.text
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
  console.log(error);
  res.end("fuck");
  }else{
  console.log("Message sent: " + response.message);
  res.end("sent");
  }
  });
});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
