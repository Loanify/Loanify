var Equipment = require('../models/equipment_model.js');
var controller = {};

controller.index = function(req, res) {
  Equipment.find({}, function(err, equipment) {
    if (err) console.log(err);


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
    console.log('equipment saved');
  });
};


controller.update = function(req, res) {
};

module.exports = controller;

//different approach, josh's code
function userposts (req, res) {
    var userID = req.user._id
    console.log(req.user._id)
    Post.find({user: userID}, function(error, posts) {
        if(error) throw error
        res.render('userposts.ejs', {posts: posts});
    })
}
