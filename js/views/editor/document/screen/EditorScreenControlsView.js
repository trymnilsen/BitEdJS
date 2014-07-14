'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/document/screen/EditorScreenControlsViewTemplate.html'
], function($, _, Backbone, ScreenControlsTemplate){

  var EditorScreenControlsView = Backbone.View.extend({
    el: $('<div></div>'),

    render: function(){
        //Set the content loaded via text!.js
        this.$el.html(ScreenControlsTemplate);
    }

  });

  return EditorScreenControlsView;
  
});