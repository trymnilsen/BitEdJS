'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/menu/AppMenuButton',
  'text!views/editor/navbar/EditorNavbarViewTemplate.html'
], function($, _, Backbone, AppMenuButton, navbarTemplate){

  var EditorNavbarView = Backbone.View.extend({
    className: 'editor-navbar',
    render: function(){
      var button = new AppMenuButton();
      this.$el.append(button.render().el);
      this.$el.append(navbarTemplate);
      return this;
    }

  });

  return EditorNavbarView;
  
});
