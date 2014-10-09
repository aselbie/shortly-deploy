var mongoose = require('mongoose');

var db = process.env.MONGOLAB_URI || 'mongodb://localhost/test'
mongoose.connect(db);

module.exports = mongoose.connection;
