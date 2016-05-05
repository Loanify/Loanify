var express = require('express');
var router = express.Router();

var nodemailerController = require('../controllers/nodemailer_controller.js');
console.log(nodemailerController);

//posts urls inputs to our model
router.route('/index')
  .get(nodemailerController.index);

router.route('/new')
  .get(nodemailerController.new);

router.route('/')
  .post(nodemailerController.create);

router.route('/:id')
  .delete(nodemailerController.destroy)
  .get(nodemailerController.show)
  .post(nodemailerController.update);

module.exports = router;
