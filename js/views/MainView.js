'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'jquery.layout',
], function($, _, Backbone){
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

    }
  });
  // Our module now returns our view
  return MainView;
});