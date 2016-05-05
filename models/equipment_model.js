var mongoose = require('mongoose');
var Person = require('../models/person.js');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  loanedTo      : {
    firstName     : String,
    lastName      : String,
    item          : String,
    email         : String,
    comments      : String,
    timeCheckedOut: { type : Date, default: Date.now }
  },
  available     : { type: Boolean, default: true }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

// equipment.loadOTo(person);

module.exports = Equipment;
