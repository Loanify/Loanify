var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Loanify', function(err){
  if (err){
    console.log("Cannot connect to database", err);

  }else{
    console.log('Database connected.')
  }
  var db = mongoose.connection;
})

module.exports = mongoose
