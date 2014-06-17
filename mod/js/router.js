'use strict';
// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView'
], function($, _, Backbone, MainView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    app_router.on('route:showProjects', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      console.log(' en route to Projects');
      var layoutView = new MainView();
      layoutView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showUsers', function(){
      console.log('Users');
    });
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});