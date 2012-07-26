(function() {
  var Home = {
      routes: {
        // Define some URL routes
        '*actions': 'home'

      },
      home: function(actions) {
        console.log(actions);
        // We have no matching route, lets display the home page
        if (typeof App.views.main === 'undefined') {
          App.views.main = new App.Views.Main({
            el: $('#content')
          });
        }
        App.views.main.render();
      },
  }
  App.Routers.Home = Backbone.Router.extend(Home);
})();