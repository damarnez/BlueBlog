(function() {
	 
	var articles = {

		
		initialize: function() {
			 
			console.log(this.el);
			  App.collections.articles.bind("all",this.render,this);
		},
		render: function() {
			console.log("render article?");
		
			var self = this;
				$.get('/templates/articles/articles.html', function (view) {
	                var _articles = App.collections.articles.toJSON();
	                
	                var data = {
	                    _:_,
	                    articles:_articles
	                };
	                console.log(data);
	                var compiledTemplate = _.template(view,data);                
	                self.$el.append(compiledTemplate);
	                
	            });
					
				console.log(this.$el);
		
		}
	}

	App.Views.Articles = Backbone.View.extend(articles);

})();