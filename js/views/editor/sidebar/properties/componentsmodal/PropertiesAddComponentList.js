'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/components/ComponentResolver',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentListItemTemplate.html'
], 
function($,
 _, 
 Backbone,
 ComponentsResolver,
 itemTemplate
 ){
    var tagItemView = Backbone.View.extend({

        tagName: 'ul',
        template: _.template(itemTemplate),

        render: function(){
            //Append a template with out components data
            var componentsResolver = new ComponentsResolver();
            var templateData = this.template(
            {
                 components: componentsResolver.getAllComponents()
            });
            this.$el.html(templateData);
            return this;
        }
    });
    return tagItemView;   
});