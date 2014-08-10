'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/editor/sidebar/properties/tag/PropertiesTagView',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html'
], 
function($,
 _, 
 Backbone,
 TagView,
 viewTemplate
 ){
    var propertiesView = Backbone.View.extend({
        id: 'editorPropertiesView',
        template: _.template(viewTemplate),
        render: function(){
            this.$el.html(this.template());
            var tagView = new TagView();
            $('.properties-lower-tags',this.$el).html(tagView.render().el);
            return this;
        },
    });
    return propertiesView;   
});