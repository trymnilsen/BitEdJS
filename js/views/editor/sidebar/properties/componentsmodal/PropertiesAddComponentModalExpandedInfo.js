'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalExpandedInfoTemplate.html'
], 
function($,
 _, 
 Backbone,
 infoTemplate
 ){
    var tagItemView = Backbone.View.extend({

        className: 'component-modal-info-container',
        template: _.template(infoTemplate),
        render: function(){
           // this.$el.html(this.template());
            return this;
        }
    });
    return tagItemView;   
});