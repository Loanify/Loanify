var express = require('express');
var router = express.Router();
var equipmentController = require('../controllers/equipment_controller.js');
console.log(equipmentController);

//posts urls inputs to our model
router.route('/index')
  .get(equipmentController.index)
  .post(equipmentController.create);

// router.route('/:id')
//   .get(linksController.show)
//   .patch(linksController.update);


module.exports = router;
