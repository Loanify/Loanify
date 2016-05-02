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

controller.show = function(){
};

controller.create = function(req, res) {
  var equipment = new Equipment();
  equipment.title = req.body.itemTitle;
  equipment.serial = req.body.serialNumber;
  equipment.desc = req.body.description;
  link.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(link);
  });
};


controller.update = function(req, res) {
};

module.exports = controller;
