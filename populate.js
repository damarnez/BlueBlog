
var mongooseInit = require('./lib/mongo');
	
//mongooseInit.connect();
mongooseInit.connect();
 
require('./lib/populate')();
 
console.log('Finalized');