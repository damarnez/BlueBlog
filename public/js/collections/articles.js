(function() {   
    var Articles = Backbone.Collection.extend({
        model: App.Models.Article,
        url:'/api/articles',
        toJSON : function() {
  			return this.map(function(model){ return model.toJSON(); });
		}
    });
    
    App.Collections.Articles = Articles;
})();
