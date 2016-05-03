var mongoose = require('mongoose');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  availability  : { type: Boolean, default: true }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
