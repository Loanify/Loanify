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
  var firstName = req.body.loanedTo.firstName;
  var lasttName = req.body.loanedTo.lastName;
  var item = req.body.loanedTo.item;
  var email = req.body.loanedTo.email;
  var comment = req.body.loanedTo.comment;
  var timeCheckedOut = req.body.loanedTo.timeCheckedOut;


  console.log(req.body, req.params);
  Equipment.findOneAndRemove({_id: id}, {firstname: firstName}, {lastName: lastName},
    {item: item}, {email: email}, {comment: comment}, {timeCheckedOut: timeCheckedOut},
    function(err, doc, result){
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
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var item = req.body.item;
  var email = req.body.email;
  var comment = req.body.comment;
  // var timeCheckedOut = req.body.timeCheckedOut;
  // TODO update person information
  // get info from req.body
  Equipment.findOneAndUpdate(
    {_id: id},
    {available: false,
    loanedTo: {firstName: firstName,
    lastName: lastName,
    item: item,
    email: email,
    comments: comment
    }},
    function(err, equipment) {
    if (err) {
      throw err;
    }
      res.redirect('/index');
  });
};

module.exports = controller;

