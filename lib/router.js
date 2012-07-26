//ROUTER.JS
module.exports = function(app,passport){

		//INDEX HOME
		require('./router/home')(app);
		//LOGIN
		require('./router/login')(app,passport);
		//ADMIN
		require('./router/admin')(app,passport);
		//ACTICLES
		require('./rest/articles')(app,passport);
	
		 
		
};
