var mongoose = require('mongoose');
var person = require('./models/person.js');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  loanedTo      : [ Person.schema ],
  available     : { type: Boolean, default: false }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
