var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  phone: Number,
  order: Number,
});
var UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel