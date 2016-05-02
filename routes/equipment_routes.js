var express = require('express');
var router = express.Router();
var equipmentController = require('../controllers/equipment_controller.js');
console.log(equipmentController);


// //Routes
// router.get('/', function(req, res){
//   res.render('Hello');
// });

// router.get('/login', function(req, res) {
//   res.render('login');
// });

router.route('/equipment')
  .get(equipmentController.index)
  .post(equipmentController.create);

module.exports = router;
