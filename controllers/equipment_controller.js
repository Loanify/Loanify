var Equipment = require('../models/equipment.js');
var controller = {};

controller.index = function(req, res) {
  Equipment.find({}, function(err, equipment) {
    if (err) {
      throw err;
    }
      require('connect-ensure-login').ensureLoggedIn();
      res.render('index', {equipment: equipment});
  });
};

controller.create = function(req, res) {
  var Equipment = new Equipment();
  equipment.title = req.body.itemTitle;
  equipemtn.serial = req.body.serialNumber;
  equipment.desc = req.bod.description;
  equipment.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(link);
  });
};
