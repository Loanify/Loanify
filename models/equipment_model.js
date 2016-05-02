var mongoose = require('mongoose');

var equipmentSchema = new mongoose.Schema({
  itemTitle     : String,
  serialNumber  : String,
  description   : String,
  public        : { type: Boolean, default: false }
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
