var Equipment = require('../models/equipment_model.js');
var controller = {};

controller.index = function(req, res) {
  Equipment.find({}, function(err, equipment) {
    if (err) {
      throw err;
    }
    res.json(equipment);
  });
};

controller.show = function() {
};

controller.new = function(req, res) {
  res.render('new');
};

controller.create = function(req, res) {

  var equipment = new Equipment({
    itemTitle: req.body.itemTitle,
    serialNumber: req.body.serialNumber,
    description: req.body.description,
    loanedTo: req.body.loanedTo,
    available: req.body.available
  });


  equipment.save(function(err) {
    if (err) throw err;
    res.redirect('/index');
  });
};

// controller.create = function(req, res) {

//   var equipment = new Equipment();
//     equipment.itemTitle = req.body.itemTitle;
//     equipment.serialNumber = req.body.serialNumber;
//     equipment.description = req.body.description;
//     equipment.loanedTo = req.body.loanedTo;
//     equipment.available = req.body.available;

//   equipment.save(function(err) {
//     if (err) {
//       throw err;
//     }
//     res.json(equipment);
//   });
// };

controller.update = function(req, res) {
};

module.exports = controller;

// var equipmentSchema = new mongoose.Schema({
//   itemTitle     : String,
//   serialNumber  : String,
//   description   : String,
//   loanedTo      : [ Person.schema ],
//   available     : { type: Boolean, default: false }
// });
