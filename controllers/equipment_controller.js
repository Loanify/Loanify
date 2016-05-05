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
    res.json({status: "deleted"});
  });
  //find equipment to delete via ID
  //delete item
  //send back confirmation as JSON
};


controller.update = function(req, res) {
  var id = req.params.id;
  var itemTitle = req.body.itemTitle;
  var serialNumber = req.body.serialNumber;
  var description = req.body.description;

  Equipment.findOneAndUpdate(
    {_id: id},
    { itemTitle: itemTitle,
      serialNumber: serialNumber,
      description: description,
    },
    function(err, equipment) {
    if (err) {
      throw err;
    }
      res.redirect('/index');
  });
};


controller.checkOutCheckIn = function(req, res) {
  var id = req.params.id;

  Equipment.findById(id, function(err, equipment) {
    if (err) {
      throw err;
    }
    if (equipment.available) {

      var firstName = req.body.firstName;
      var lastName = req.body.lastName;
      var item = req.body.item;
      var email = req.body.email;
      var comment = req.body.comment;

      Equipment.findOneAndUpdate(
        {_id: id},
        {available: false,
        loanedTo: {
          firstName: firstName,
          lastName: lastName,
          item: item,
          email: email,
          comments: comment
        }},
        function(err, equipment) {
        if (err) {
          throw err;
        }
          res.redirect('/email');
      });

    } else {

      Equipment.findOneAndUpdate(
        {_id: id},
        {available: true,
        loanedTo: {
          firstName: "",
          lastName: "",
          item: "",
          email: "",
          comments: ""
        }},
        function(err, equipment) {
        if (err) {
          throw err;
        }
          res.redirect('/index');
      });
    }
});
};

controller.edit = function(req, res) {
  Equipment.findById(req.params.id, function(err, equipment) {
    if (err) {
      throw err;
    }
    res.render('edit', {equipment: equipment});
  });
};



module.exports = controller;

