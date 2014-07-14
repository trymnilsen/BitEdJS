'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/document/screen/EditorScreenView'
], function($, _, Backbone, EditorScreenView){

  var EditorScreenControlsView = Backbone.View.extend({
    el: $('<div></div>'),

    render: function(){
        //Set the content loaded via text!.js
        
    }

  });

  return EditorScreenControlsView;
  
});