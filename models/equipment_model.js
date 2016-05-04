var mongoose = require('mongoose');
var Person = require('../models/person.js');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  loanedTo      : [ Person.schema ],
  available     : { type: Boolean, default: true }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);



// equipment.loadOTo(person);

module.exports = Equipment;
