'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/menu/AppMenuView',
  'jquery.layout'
], function($, _, Backbone, AppMenuView){

  var EditorLayoutView = Backbone.View.extend({
    el: $('#mainContent'),

    render: function(){
        //this.$el.html('<h1>hello</h1>');
        var appMenu = new AppMenuView();
        appMenu.render();
        jQuery('#mainContent').layout({ 
            fxName : 'none',
            livePaneResizing: true
        });
    }

  });

  return EditorLayoutView;
  
});