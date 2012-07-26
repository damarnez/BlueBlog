var mongoose = require('mongoose');

module.exports = (function() {

	var connected = false;

	return {
		connect: function(connectionString) {
			if (!connected) {
				connectionString = connectionString || 'mongodb://localhost/dani_blog';
				mongoose.connect(connectionString);
				connected = true;	
			}
		}
	};
}());