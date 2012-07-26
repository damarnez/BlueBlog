var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Articles = new Schema({
	title: { type: String, required: true },
	short_article: [{type: String, required:false}],
	article: [{type: String, required:false}],
	type: {type: Number, enum: [1,2],  required: true},
	creation_date: {type:Date, default: Date.now}
}); 

mongoose.model('Articles', Articles);
module.exports = mongoose.model('Articles');

