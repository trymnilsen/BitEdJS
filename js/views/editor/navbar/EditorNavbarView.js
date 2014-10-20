'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/menu/AppMenuButton',
  'views/app/user/navbar/AppUserNavbarView',
  'text!views/editor/navbar/EditorNavbarViewTemplate.html'
], function($, _, Backbone, AppMenuButton, UserNavbarView, navbarTemplate){

  var EditorNavbarView = Backbone.View.extend({
    className: 'editor-navbar',
    render: function(){
      var button = new AppMenuButton();
      var userView = new UserNavbarView();
      this.$el.append(button.render().el);
      this.$el.append(navbarTemplate);
      this.$el.append(userView.render().el);
      return this;
    }

  });

  return EditorNavbarView;
  
});
