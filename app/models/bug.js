var mongoose = require('mongoose');

module.exports = mongoose.model('Bug', {
	desc : String,
	fixed : Boolean
});