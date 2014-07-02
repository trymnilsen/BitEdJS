// Filename: router.js
'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/contributors/ContributorsView',
  'views/footer/FooterView',
  'views/editor/layout/EditorLayoutView'
], function($, _, Backbone, HomeView, ProjectsView, ContributorsView, FooterView, EditorLayoutView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      'editor':'showEditor',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showEditor',function(){
        console.log('hit editor');
        var editorLayout = new EditorLayoutView();
        editorLayout.render();
    });

    app_router.on('route:defaultAction', function (actions) {
        console.log('no route',actions);
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });


    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
