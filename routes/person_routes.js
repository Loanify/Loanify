var express = require('express');
var router = express.Router();
var personController = require('../controllers/person_controller.js');
console.log(personController);

//posts urls inputs to our model
router.route('/')
  .get(personController.index)
  .post(personController.create);

router.route('/new')
  .get(personController.new);

router.get('/:id')
  .get(personController.show)
  .post(personController.update);

module.exports = router;
