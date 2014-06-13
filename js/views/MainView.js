'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'jquery.layout',
  'text!templates/debug/profileTemplate.html'
], function($, _, Backbone, profileTemplate){
  var MainView = Backbone.View.extend({
    el: $('body'),
    render: function(){
      console.log('In render');
      // Using Underscore we can compile our template with data
      $('body').layout({ 
        applyDemoStyles: true,
        west__minSize: 150,
        fxName: 'none'
        });
      this.$el.html(profileTemplate);
      //console.log($('#editorPanelSouth').append('<h1>Hellooooo</h1>'));

    }
  });
  // Our module now returns our view
  return MainView;
});