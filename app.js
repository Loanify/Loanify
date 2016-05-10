var express= require('express');
var logger = require('morgan');
var app = express();
var Equipment = require('./models/equipment_model');
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
var CronJob = require('cron').CronJob;

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
  res.end("try again, maybe npm install. noob");
  }else{
  console.log("Message sent: " + response.message);
  res.end("sent");
  }
  });
});

// seconds, minutes, hours, days, months, ye
var job = new CronJob({
  cronTime: '00 00 18 * * 1-5',
  onTick: checkForAndSendEmails,
  start: true,
  timeZone: 'America/Los_Angeles'
});
job.start();


function checkForAndSendEmails() {
  // find all unavailable equipment
  getAvailableEmails()
    .then(function(emails){
      emails.forEach(function(email){
        sendEmail(email);
      });
    })
    .catch(function(err){
      console.log(err);
    });
}

// returns a thenable promise
function getAvailableEmails() {
  return Equipment.find({available: false})
    .then(function(equipments){
      // return the array of emails
      return equipments.map(function(equipment) {
        return equipment.loanedTo.email;
      });
    });
}
function sendEmail(to){
  var nodemailer = require("nodemailer");
  var transport = nodemailer.createTransport('direct', {
    debug: true, //this!!!
  });
  transport.sendMail({
    from: "Fred Foo <foo@blurdybloop.com>", // sender address
    // put new array here
    to: to,
    subject: "Hello", // Subject line
    text: "Hey DICKHEAD", // plaintext body
    html: "<b>GIVE US BACK OUR EQUIPMENT OR YOUR FUCKED</b>" // html body
  }, console.error);
}

app.listen(port, function(){
  console.log("Listening on port " + port);
});

