'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/navbar/EditorNavbarViewTemplate.html',
  //Non argument
  'bootstrap'
], function($, _, Backbone, navbarTemplate){

  var EditorNavbarView = Backbone.View.extend({
    el: $('#editornavbar'),

    render: function(){
      this.$el.html(navbarTemplate);
    }

  });

  return EditorNavbarView;
  
});
