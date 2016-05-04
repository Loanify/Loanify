var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  firstName     : String,
  lastName      : String,
  item          : String,
  email         : String,
  comment       : String,
  timeCheckedOut: { type : Date, default: Date.now }
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
