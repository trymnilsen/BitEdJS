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
        events : {
        	'click .properties-component-portlet-header' : 'toggleHeader'
        },
        render: function(component){
        	this.$el.html(this.template(component));
            $('.properties-component-portlet-content',this.$el).hide();
            return this;
        },
        toggleHeader: function(){
            $('.properties-component-portlet-content',this.$el).toggle();
        	$('.collapse-icon',this.$el).toggleClass('fa-chevron-right fa-chevron-down collapse-icon-close');
        }
    });
    return propComponentItemView;   
});