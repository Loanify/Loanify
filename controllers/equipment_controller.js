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

controller.show = function(req, res) {
  var id = req.params.id;
  Equipment.findById(id, function(err, equipment) {
    if (err) {
      throw err;
    }
    if (equipment.available) {
      res.render('checkout_form', {equipment: equipment});
    } else {
      res.render('show', {equipment: equipment});
    }
  });
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

controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  Equipment.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "deleted"})
  });
  //find equipment to delete via ID
  //delete item
  //send back confirmation as JSON
}



controller.update = function(req, res) {
  var id = req.params.id;
  // TODO update person information
  // get info from req.body
  Equipment.findOneAndUpdate({_id: id}, {available: false}, function(err, equipment) {
    if (err) {
      throw err;
    }
      res.redirect('/index');
  });
};

module.exports = controller;

