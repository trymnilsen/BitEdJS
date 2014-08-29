'use strict';

define([
'jquery',
'underscore',
'backbone',
'views/editor/sidebar/properties/components/PropertiesComponentItemView'
], 
function($,
_, 
Backbone,
Itemview
){
    var propComponentsView = Backbone.View.extend({
        className: 'properties-components-container',
        components: [],
        //Expected format of single component
        compDump: {
        	number: 1,
        	name: 'Physics',
        	sortable: 'true',
        	properties: [
        		{
        			name : 'Movement',
        			type : 'bool',
        			value : true
        		}
        	],
        },
        setComponents: function() {
        	//Clean up old
        	//
        	this.render();
        },

        render: function(){
            this.$el.html('');
        	for (var i = 0; i < this.components.length; i++) {
        		var itemView = new Itemview();
        		this.$el.append(itemView.render().el);
        		console.log('Added Component');
        	}
            return this;
        },

    });
    return propComponentsView;   
});