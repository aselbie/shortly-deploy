var db = require('../config');
var crypto = require('crypto');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

LinkSchema = new Schema({
  url: { type: String, default: '' },
  base_url: { type: String, default: '' },
  code: { type: String, default: '' },
  title: { type: String, default: '' },
  visits: { type: Number, default: 0 }
});

LinkSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = mongoose.model('Link', LinkSchema);

