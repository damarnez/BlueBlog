window.App = {
  models: {},
  Models: {},
  collections: {},
  Collections: {},
  views: {homedevices:[]},
  Views: {HomeDevices:[]},
  routers: {},
  Routers: {}
}

$(function() {
   
  // initializing the collections...
  App.collections.articles = new App.Collections.Articles();
  App.collections.articles.fetch();
  
  //initialing router..
  App.routers.home = new App.Routers.Home();

  Backbone.history.start();
});
