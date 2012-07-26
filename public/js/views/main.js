(function() {

	var mainView = {


		initialize: function() {
			var self = this;
			//Inicializamos views de map y alerts
			if (typeof App.views.android === 'undefined') {
				App.views.android = new App.Views.Articles({
            		el: self.$('#android'), type:1
       		 	});
			}
			if (typeof App.views.nodejs === 'undefined') {
				App.views.nodejs = new App.Views.Articles({
					el:self.$('#nodejs'), type:2
				});
			}
			 
		},
		render: function() {

			console.log("render main?");
		}
	}

	App.Views.Main = Backbone.View.extend(mainView);

})();