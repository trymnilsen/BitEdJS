'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html'
], 
function($,
 _, 
 Backbone,
 viewTemplate
 ){
    var propertiesView = Backbone.View.extend({
        className: 'viewClassName',
        template: _.template(viewTemplate),
        render: function(){
            this.$el.html(this.template());
            return this;
        },
    });
    return propertiesView;   
});