var Article = require("./entities/article");
var User = require('./entities/user');


module.exports = function() {

	console.log("Create user ");
	/*var user = new User({
    name: 'admin',
    email: 'admin@gmail.com'
	})
	user.setPassword('admin');
	user.save();*/

	var article = new Article({
		title:"Titulo numero uno",
		short_article:"balalslfldaslda lsdl asdl alsdla slda lsdl alsdla slda l",
		article:"asdas asdk asdk asdk aksdaks dka ksdkask dkasdk aks akas dk",
		type:1,
	});
	article.save();
	console.log("Finish");

};