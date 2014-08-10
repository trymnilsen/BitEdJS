'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/properties/tag/PropertiesTagItemTemplate.html'
], 
function($,
 _, 
 Backbone,
 itemTemplate
 ){
    var tagItemView = Backbone.View.extend({
        tagName: 'li',
        className: 'property-tag-float',
        template: _.template(itemTemplate),
        tag : 'foo',
        events: {
            'click .properties-tag-remove' : 'removeTag',
        },

        render: function(){
            this.$el.html(this.template({tag: this.tag}));
            return this;
        },
        removeTag: function(){
            this.$el.trigger('remove')
        },
    });
    return tagItemView;   
});