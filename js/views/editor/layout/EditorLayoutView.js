'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/menu/AppMenuView',
  'views/editor/layout/EditorDropAssetView',
  'jquery.layout'
], function($, _, Backbone, EditorDropAssetView, AppMenuView){

  var EditorLayoutView = Backbone.View.extend({
    el: $('#mainContent'),

    render: function(){
        //this.$el.html('<h1>hello</h1>');
        var dragAndDropAssetField = new EditorDropAssetView();
        dragAndDropAssetField.render();
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