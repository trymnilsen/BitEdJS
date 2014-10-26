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

        render: function(){
            return this;
        }
    });
    return tagItemView;   
});