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
        template : _.template(itemTemplate),
        render: function(){
        	this.$el.html(this.template({name: 'physics'}));
            return this;
        },
    });
    return propComponentItemView;   
});