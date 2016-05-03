var express = require('express');
var router = express.Router();


 router.get('/show', function(req, res) {
      res.render('show');
  });


// router.post()


module.exports = router;
