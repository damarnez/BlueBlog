(function() {   
var Article = Backbone.Model.extend({
        initialize: function() {
      
        },
        toJSON : function() {
            return _.clone(this.attributes);
        }
    });

    App.Models.Article = Article;
})();