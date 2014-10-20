'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/app/user/navbar/AppUserNavbarViewTemplate.html',
  'dropDownEnhanc'
], function($, _, Backbone, viewTemplate){

  var EditorNavbarView = Backbone.View.extend({
    className: 'app-navbar-user',
    render: function(){
      this.$el.append(viewTemplate);
      return this;
    }

  });

  return EditorNavbarView;
  
});
