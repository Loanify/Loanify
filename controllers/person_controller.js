var Person = require('../models/person.js');
var controller = {};

controller.index = function(req, res) {
  Person.find({}, function(err, person) {
    if (err) {
      throw err;
    }
    res.json(person);
  });
};

controller.show = function(){
};

controller.new = function(req, res) {
  res.render('new');
};

controller.create = function(req, res) {
  var person = new Person();
  person.firstName = req.body.firstName;
  person.lastName = req.body.lastName;
  person.item = req.body.item;
  person.email = req.body.email;
  person.comment = req.body.comment;
  person.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(person);
  });
};


controller.update = function(req, res) {
};

module.exports = controller;
