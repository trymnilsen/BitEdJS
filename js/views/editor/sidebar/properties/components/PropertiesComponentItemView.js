'use strict';

define([
'jquery',
'underscore',
'backbone',
'views/editor/sidebar/properties/components/PropertiesComponentParameterList',
'text!views/editor/sidebar/properties/components/PropertiesComponentItemTemplate.html',
'backboneToggleModel'
], 
function($,
_, 
Backbone,
ParamList,
itemTemplate
){
    var propComponentItemView = Backbone.View.extend({
        className: 'properties-component-portlet',
        template : _.template(itemTemplate),
        component: null, 
        events : {
        	'click .properties-component-portlet-header' : 'toggleHeader',
            'click .fa-eye'                              : 'toggleVisibility'
        },
        render: function(component){
        	this.$el.html(this.template(component));
            $('.properties-component-portlet-content',this.$el).hide();
            var params = new ParamList(component.get('parameters'));
            $('.properties-component-portlet-content',this.$el).append(params.render().el);
            return this;
        },
        toggleHeader: function(){
            $('.properties-component-portlet-content',this.$el).toggle();
        	$('.collapse-icon',this.$el).toggleClass('fa-chevron-right fa-chevron-down collapse-icon-close');
        },
        toggleVisibility: function(event){
            this.component.toggle('isActive');
            event.stopPropagation();
        }
    });
    return propComponentItemView;   
});