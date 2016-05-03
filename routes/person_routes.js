var express = require('express');
var router = express.Router();
var personController = require('../controllers/person_controller.js');
console.log(personController);

//posts urls inputs to our model
router.route('/person/index')
  .get(personController.index);

router.route('/person/new')
  .get(personController.new)
  .post(personController.create);

// router.route('/:id')
//   .get(linksController.show)
//   .patch(linksController.update);


module.exports = router;
