var mongoose = require('mongoose');
var Person = require('../models/person.js');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  loanedTo      : {
    firstName     : { type: String, default: 'none'},
    lastName      : { type: String, default: 'none'},
    email         : { type: String, default: 'none'},
    comments      : { type: String, default: 'none'},
    timeCheckedOut: { type : Date, default: Date.now }
  },
  available     : { type: Boolean, default: true }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

// equipment.loadOTo(person);

module.exports = Equipment;
