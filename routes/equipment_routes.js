var express = require('express');
var router = express.Router();

var equipmentController = require('../controllers/equipment_controller.js');
console.log(equipmentController);

//posts urls inputs to our model
router.route('/index')
  .get(equipmentController.index);

router.route('/new')
  .get(equipmentController.new);

router.route('/')
  .post(equipmentController.create);

router.route('/:id')
  .delete(equipmentController.destroy)
  .get(equipmentController.show)
  .post(equipmentController.update);

router.route('/checkInCheckOut/:id')
  .post(equipmentController.checkOutCheckIn);

router.route('/:id/edit')
  .get(equipmentController.edit);

// router.route('/:id')
//   .get(linksController.show)
//   .patch(linksController.update);


module.exports = router;
