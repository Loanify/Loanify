var express = require('express');
var router = express.Router();

var equipmentController = require('../controllers/equipment_controller.js');
console.log(equipmentController);

//posts urls inputs to our model
router.route('/new')
  .get(equipmentController.new);

router.route('/')
  .get(equipmentController.index)
  .post(equipmentController.create);

router.route('/:id')
  .delete(equipmentController.destroy)
  .get(equipmentController.show)
  .post(equipmentController.update);

module.exports = router;
