'use strict';

define([
'jquery',
'underscore',
'backbone',
'text!views/editor/sidebar/properties/components/PropertiesComponentItemTemplate.html'
], 
function($,
_, 
Backbone,
itemTemplate
){
    var propComponentItemView = Backbone.View.extend({
        className: 'properties-component-portlet',
        render: function(){
        	this.$el.html(itemTemplate);
            return this;
        },
    });
    return propComponentItemView;   
});