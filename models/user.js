var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  username : String,
  password : String,
});

userSchema.methods.validatePassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.local.password);
};

userSchema.methods.encrypt = function(pwd) {
  return bcrypt.hashSync(pwd, 8);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
