var mongoose = require('mongoose');

var equipmentSchema = new mongoose.Schem({
  itemTitle: String,
  serialNumber: String,
  description: String,
  isCheckedOut: { type: Boolean, default: false }
});

var Equipment = mongoose.model('Link', equipmentSchema);

module.exports = Equipment;
