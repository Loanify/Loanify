controller.index = function(req, res) {
  Nodemailer.find({}, function(err, nodemailer) {
    if (err) {
      throw err;
    }
    res.send(nodemailer);
  });
};

module.exports = controller;
