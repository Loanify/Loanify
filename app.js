var express= require('express');
var logger = require('morgan')
var app = express();
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var db = require('./db.js')
var router = express.Router()


//Configure view engine to render EJS templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Routes
app.get('/', function(req, res){
  res.json({message: 'Hello'});
});

app.get('/login', function(req, res) {
  res.render('login');
});
















app.listen(port, function(){
  console.log("Listening on port " + port)
})
