var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  firstName     : String,
  lastName      : String,
  item          : String,
  email         : String,
  comment       : String
});
// var checkoutSchema = new mongoose.Schema({
//   firstName     : String,
//   lastName      : String,
//   email         : String,
//   comment       : String
// });

var Person = mongoose.model('Person', checkoutSchema);

module.exports = Person;
