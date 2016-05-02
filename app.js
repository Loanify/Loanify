var express= require('express');
var logger = require('morgan')
var app = express();
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var db = require('./db.js')
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var session = require('express-session');
var flash    = require('connect-flash');

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      console.log('user exists')
      if (!user.validatePassword(password)) { return done(null, false); }
      console.log('no errors!')
      return done(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


//Configure view engine to render EJS templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());


//Routes
app.get('/', function(req, res) {
  res.render('home', { user: req.user });
});

//passport Login
app.get('/login', function(req, res) {
  res.render('login');
});
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Success')
    res.redirect('/profile');
  });



//passport register

app.post('/register', function(req, res) {


  var body = req.body;

  var user = new User();

  user.username = body.username;
  user.password = user.encrypt(body.password);

  user.save(function(err) {
    if (err) throw err;
    // res.json({ message: 'User created successfully!', results: user });
    req.login(user, function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/profile');
      });
  });
});


//   // attach POST to user schema
//   var user = new User({  username: req.body.username, password: req.body.password });
//   // save in Mongo
//   user.save(function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log('user: ' + user + " saved.");
//     }
 app.get('/register', function(req, res) {
      res.render('register');
  });



app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', {user: req.user})

});


app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });















app.listen(port, function(){
  console.log("Listening on port " + port)
})
