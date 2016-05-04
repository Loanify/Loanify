var Person = require('../models/person.js');
var controller = {};
var Equipment = require('../models/equipment_model.js')

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
  person.timeCheckedOut = Date.now();
  person.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(person);
  })
};

// controller.destroy = function(req, res) {
//    var id = req.params.id;
//    Equipment.findOneAndUpdate({_id: id}, {available: false}, function(err, equipment) {
//     if (err) {
//       console.log( err);
//     }


//   console.log(req.body, req.params);
//   Person.findOneAndRemove({_id: id}, function(err, doc, result){
//     if (err){
//       throw(err);
//     }
//     console.log(err, doc, result);
//     res.json({status: "person deleted"})
//   })
// })
// }


  //find equipment to delete via ID
  //delete item
  //send back confirmation as JSON



  //find equipment to delete via ID
  //delete item
  //send back confirmation as JSON




// controller.update = function(req, res) {
// };

module.exports = controller;
