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

// router.route('/:id')
//   .get(personController.show)
//   .patch(linksController.update);
router.get('/:id')
  .get(personController.show)
  .post(personController.update);

module.exports = router;


// //posts urls inputs to our model
// router.route('/index')
//   .get(equipmentController.index);

// router.route('/new')
//   .get(equipmentController.new);

// router.route('/')
//   .post(equipmentController.create);

// router.route('/:id')
//   .delete(equipmentController.destroy)
//   .get(equipmentController.show)
//   .post(equipmentController.update);








// var express = require('express');
// var router = express.Router();
// var personController = require('../controllers/person_controller.js');
// console.log(personController);

// //posts urls inputs to our model
// router.route('/person/index')
//   .get(personController.index);

// router.route('/person/new')
//   .get(personController.new)
//   .post(personController.create);

// // router.route('/:id')
// //   .get(personController.show)
// //   .patch(linksController.update);
// router.get('/show', function(req, res) {
//   res.render('show');
// });
//   // personController.show);

// module.exports = router;
