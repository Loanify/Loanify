var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice_passport', function(err){
  if (err){
    console.log("Cannot connect to database", err);

  }else{
    console.log('Databse connected.')
  }
  var db = mongoose.connection;
})

module.exports = mongoose
