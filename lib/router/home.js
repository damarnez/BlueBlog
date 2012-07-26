module.exports = function(app,passport) {
	//default
	app.get('/', function(req, res){
		res.render("index.html");
	});
};