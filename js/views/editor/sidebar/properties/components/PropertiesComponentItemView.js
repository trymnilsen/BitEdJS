'use strict';

define([
'jquery',
'underscore',
'backbone',
'views/editor/sidebar/properties/components/PropertiesComponentParameterList',
'text!views/editor/sidebar/properties/components/PropertiesComponentItemTemplate.html',
'backboneToggleModel',
'backbone-dispose'
], 
function($,
_, 
Backbone,
ParamList,
itemTemplate
){
    var propComponentItemView = Backbone.View.extend({
        /**
         * Classname of this views element
         * @type {String}
         */
        className: 'properties-component-portlet',
        /**
         * Function for returning fresh html with out passed data
         * @type {function(Object):string}
         */
        template : _.template(itemTemplate),
        /**
         * The component model for this view
         * @type {Object}
         */
        component: null, 
        /**
         * reference to param list view
         * @type {Object}
         */
        parameterListView: null,
        /**
         * The delegated events for this view
         * @type {Object}
         */
        events : {
        	'click .properties-component-portlet-header' : 'toggleHeader',
            'click .active-component-button'             : 'toggleVisibility'
        },
        /**
         * Initializes this view
         * @param  {Object} component The component model for this view
         */
         initialize: function(comp)
         {
            this.component = comp;
         },
        /**
         * Render this view
         * @param  {Object} define a component to render
         * @return {Object} returns self
         */
        render: function()
        {
        	this.$el.html(this.template(this.component));
            $('.properties-component-portlet-content',this.$el).hide();

            this.component.on('change:isActive',_.bind(this.isActiveChanged,this));

            this.parameterListView = new ParamList(this.component.get('parameters'));
            this.appendChildView(this.parameterListView,'.properties-component-portlet-content');

            return this;
        },
        /**
         * callback for active changed
         */
        isActiveChanged: function()
        {
            console.log('Active Changed', arguments);
            $('.active-component-button').toggleClass('component-button-selected');
            $('.active-component-button').toggleClass('fa-eye');
            $('.active-component-button').toggleClass('fa-ban');
        },
        /**
         * Toggles the content
         */
        toggleHeader: function()
        {
            if(this.component.get('parameters').length>0)
            {
               $('.properties-component-portlet-content',this.$el).toggle();
        	   $('.collapse-icon',this.$el).toggleClass('fa-chevron-right fa-chevron-down collapse-icon-close');
            }
        },
        /**
         * Toggle the visibility
         */
        toggleVisibility: function(event)
        {
            this.component.toggle('isActive');
            event.stopPropagation();
        }
    });
    return propComponentItemView;   
});