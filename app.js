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

var job = new CronJob({
  cronTime: '00 40 14 * * 1-5',
  onTick: function() {
    var nodemailer = require("nodemailer"),
      transport = nodemailer.createTransport('direct', {
        debug: true, //this!!!
  });

      transport.sendMail({
        from: "Fred Foo <foo@blurdybloop.com>", // sender address
        // put new array here
        to: notAvialable, // list of receivers
        subject: "Hello", // Subject line
        text: "Hey DICKHEAD", // plaintext body
        html: "<b>GIVE US BACK OUR EQUIPMENT OR YOUR FUCKED</b>" // html body
    }, console.error);
  },
  start: true,
  timeZone: 'America/Los_Angeles'
});

//set interval
var notAvailable = [];

var emailRemind = function() {
  // var equipment;
  Equipment.find({}, function(err, equipment){
  console.log(equipment);
    if (err) {
      throw err;
    } else {
      for (var i = 0; i < equipment.length; i++) {
        if (!equipment.available) {
            var equip = equipment;
            console.log(equip.available);
            // notAvailable.push(equipment.loanedTo.email[i]);
          job.start();
        }
      }
    }
  });
};
emailRemind();
  // loop through all equipment entries
  // if checked out, push email to new array
  // if (!equipment.loanedTo.available) {
  //     job.start();
  //   }




// emailRemind();

app.listen(port, function(){
  console.log("Listening on port " + port);
});
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
