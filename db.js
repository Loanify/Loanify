var mongoose = require('mongoose');

var mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Loanify';

mongoose.connect(mongo_uri, function(err){
  if (err){
    console.log("Cannot connect to database", err);

  }else{
    console.log('Database connected.');
  }
  var db = mongoose.connection;
});

module.exports = mongoose;
