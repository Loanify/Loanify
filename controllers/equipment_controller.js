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
  var equipment = new Equipment();
  equipment.itemTitle = req.body.itemTitle;
  equipment.serialNumber = req.body.serialNumber;
  equipment.description = req.body.description;
  equipment.loanedTo = req.body.loanedTo;
  equipment.available = req.body.available;
  equipment.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(equipment);
  });
};


controller.update = function(req, res) {
};

module.exports = controller;
