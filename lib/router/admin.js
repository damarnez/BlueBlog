module.exports = function(app,passport) {
	//default
	app.get('/admin',passport.checkAuth, function(req, res){
		res.render("admin.html");
	});
};